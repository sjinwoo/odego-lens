from .forms import ImageUploadForm
import torch.nn.functional as F
from django.conf import settings
from PIL import Image
from torchvision import transforms
import torch
import os
import json
import io
import base64
from django.http import HttpResponse
from django.shortcuts import render

from PIL.ExifTags import TAGS
import numpy as np
import copy

# Create your views here.
# def index(request):
#     return HttpResponse("안녕하세요 odego입니다.")

# def index(request):
#     return render(request, 'app/index.html');


def index(request):
    image_uri = None
    predicted_label = None

    if request.method == 'POST':
        form = ImageUploadForm(request.POST, request.FILES)
        if form.is_valid():
            # passing the image as base64 string to avoid storing it to DB or filesystem
            image = form.cleaned_data['image']
            image_bytes = image.file.read()
            encoded_img = base64.b64encode(image_bytes).decode('ascii')
            image_uri = 'data:%s;base64,%s' % ('image/jpeg', encoded_img)

            # get predicted label
            try:
                predicted_label = get_prediction(image_bytes)
            except RuntimeError as re:
                print(re)
                # predicted_label = "Prediction Error"

    else:
        form = ImageUploadForm()

    context = {
        'form': form,
        'image_uri': image_uri,
        'predicted_label': predicted_label,
    }
    return render(request, 'app/index.html', context)


def map(request):
    #photozones = PhotoZone.objects.all
    return render(request, 'app/map.html')

# def map_detail(request, photozone_title):
#    title = get_object_or_404(PhotoZone, pk=photozone_title)
#   return render(request, 'app/map.html', {'title': title})


def detail1(request):
    return render(request, 'app/YeongdodaegyoBridge.html')


def detail2(request):
    return render(request, 'app/Taejongdae.html')


def detail3(request):
    return render(request, 'app/CheonghakWatersidePark.html')


def detail4(request):
    return render(request, 'app/Jeoryeong.html')


def detail5(request):
    return render(request, 'app/Pianostair.html')

################################################################################################
################################################################################################


exception_idx = -1
mean = (0.4656689, 0.4923965, 0.5106004)
std = (0.20408656, 0.21308406, 0.22686826)
classes = ("영도대교", "절영해안터널", "청학수변공원", "태종대", "피아노계단")
model = torch.load('app/best_model.pth', map_location=torch.device('cpu'))
model.eval()

json_path = os.path.join(settings.STATIC_ROOT, "imagenet_class_index.json")
imagenet_mapping = json.load(open(json_path))

# Def


def get_image(input_img):
    return Image.open(io.BytesIO(input_img)).convert('RGB')


def transform_image(image):
    my_transforms = transforms.Compose([transforms.Resize((224, 224)),
                                        transforms.ToTensor(),
                                        transforms.Normalize(mean, std)])
    return my_transforms(image).unsqueeze(0)


def get_prediction(input_img):
    image = get_image(input_img)
    tensor = transform_image(copy.deepcopy(image))
    with torch.no_grad():
        model.eval()
        outputs = F.normalize(model(tensor), dim=1)
        result = classes[torch.max(outputs, 1)[1].item()]
        if torch.max(outputs, 1)[0] > 0.7:
            return result
        else:
            return result + "(으)로 검색한 결과입니다."
