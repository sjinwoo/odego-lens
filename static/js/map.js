var mapContainer = document.getElementById('map'); // 지도를 표시할 div
var mapOption = {
        center: new kakao.maps.LatLng(35.07476207691191, 129.05489956321324), // 지도의 중심좌표
        level: 6 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다
var positions = [
    {
        content: 
            '<div class="wrap">' +
            '    <div>' +
            '        <h3>' +
            '            절영해안터널' +
            '        </h3><p><a href="/Jeoryeong/" target="_blank" class="link">홈페이지</a><p>' +
//            '        <p><a href="/Jeoryeong/" target="_blank" class="link">홈페이지</a><p>'+
            '        <div class="map_info">' +
            '            <div class="map_img">' +
            '                <img src="/static/imgs/1.png" width="73" height="70">' +
            '           </div>' +
            '            <div class="desc">' +
            '                <div><p>주소: 부산시 영도구 영선동4가 1044-6</p></div>' +
            '                <div><p>이용시간: 터널 내부 조명 점등/소등 시간: 09시/23시</p></div>' +
//            '                <div><a href="/Jeoryeong/" target="_blank" class="link">홈페이지</a></div>' +
            '            </div>' +
//            '            <div class="desc">' +
//            '                <div>절영해안산책로 근처 피아노계단과 파도광장 사이 급경사 계단구간을 이용하기 어려운 노약자들의 보행 편의 제공을 위해 해안 암벽에 약 70m 터널을 뚫어 2018년 12월 흰여울 해안터널을 개통하게 되었습니다. 터널 내부에 인조암시공, 광섬유판석조명, 포토존 등을 설치하여 구민들 뿐만 아니라 관광객들에게도 방문하기 좋은 관광명소로 자리매김 하고 있습니다.</div>' +
//            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>',
        latlng: new kakao.maps.LatLng(35.07526111111111, 129.04833888888888 ),
        removable: true
    },
    {
        content: 
            '<div class="wrap">' +
            '    <div>' +
            '        <h3>' +
            '            영도대교' +
            '        </h3><p><a href="/YeongdodaegyoBridge/" target="_blank" class="link">홈페이지</a></p>' +
            '        <div class="map_info">' +
            '            <div class="map_img">' +
            '                <img src="/static/imgs/3.jpg" width="73" height="70">' +
            '           </div>' +
            '            <div class="desc">' +
            '                <div><p>부산광역시 영도구 대교동2가</p></div>' +
            '                <div><p>이용시간: 24시간</p></div>' +
//            '                <div><a href="/YeongdodaegyoBridge/" target="_blank" class="link">홈페이지</a></div>' +
            '            </div>' +
//            '            <div class="desc">' +
//            '                <div>1932년 3월 착공하여 1934년 11월 완공한, 한마디로 일제강점기에 건설되어 오래 써먹다 재가설 이후 또 써먹는 부산 최초의 연륙교이자 국내 최초의 도개식 가동교이다. 이름대로 종착지는 영도구다. 원래 개통 당시에 정식 명칭은 부산대교였는데 지금의 부산대교가 개통하면서 영도대교로 명칭이 바뀌었다. 그리고 부산대교라고 불리던 때에도 일상적으로 영도다리 등으로 불리었기 때문에 정식으로 영도대교로 명칭을 변경할 때에는 별 혼란도 없었다.</div>' +
 //           '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>',
        latlng: new kakao.maps.LatLng(35.095305555555555, 129.03668333333334 ),
        removable: true
    },
    {
        content: 
            '<div class="wrap">' +
            '    <div class="info">' +
            '        <h3>' +
            '            청학수변공원' +
            '        </h3><p><a href="/CheonghakWatersidePark/" target="_blank" class="link">홈페이지</a></p>' +
            '        <div class="map_info">' +
            '            <div class="map_img">' +
            '                <img src="/static/imgs/5.jpeg" width="73" height="70">' +
            '           </div>' +
            '            <div class="desc">' +
            '                <div><p>부산 영도구 청학동 217-43</p></div>' +
            '                <div><p>이용시간: 24시간</p></div>' +
//            '                <div><a href="/CheonghakWatersidePark/" target="_blank" class="link">홈페이지</a></div>' +
            '            </div>' +
 //           '            <div class="desc">' +
 //           '                <div>청학수변공원은 부산항대교 완성과 함께 조성된 곳으로 저녁에 방문하면 조명이 들어온 부산항대교의 멋진 야경을 즐길 수 있습니다. 시원한 바닷바람을 맞으며 걷기 좋아 연인과 함께하는 데이트코스로 추천하며 청학배수지 전망대를 들린 후 수변공원에서 휴식을 취하는 것이 안성맞춤입니다.</div>' +
  //          '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>',
        latlng: new kakao.maps.LatLng(35.09778611111111, 129.061325 ),
        removable: true
    },
    {
            content: 
            '<div class="wrap">' +
            '       <div>' +
            '        <h3>' +
            '            태종대' +
            '        </h3><p><a href="/Taejongdae/" target="_blank" class="link">홈페이지</a></p>' +
            '        <div class="map_info">' +
            '            <div class="map_img">' +
            '                <img src="/static/imgs/4.jpg" width="73" height="70">' +
            '           </div>' +
            '            <div class="desc">' +
            '                <div><p>부산광역시 영도구 동삼동 산 29-1</p></div>' +
            '                <div><p>이용시간: 24시간</p></div>' +
//            '                <div><a href="/Taejongdae/" target="_blank" class="link">홈페이지</a></div>' +
            '            </div>' +
   //         '            <div class="desc">' +
   //         '                <div>부산광역시 영도구 동삼동에 있는 명승지(국가 지정 명승지 제17호)이다.  이름의 유래는 신라 태종 무열왕이 들러서 활쏘기를 하고 연회를 개최했던 것이다. 선시대 안정복의 동사강목에서는 태종 무열왕이 일본 대마도를 공격해 토벌했을 때 주필(駐蹕)한 곳이라는 기록도 있는데, 무열왕의 대마도 공격은 고려 이전의 기록에서 교차검증되는 부분이 아니라 큰 주목을 받진 못하고 있고 아무튼 조선시대에 그런 전승이 전해지고 있었다는 근거는 된다.  인터넷이 잘 없던 시절에는 일반 대중들에게 조선 태종 이방원이 행차하였던 곳으로 아주 크게 알려져 있었다. 조선 호텔을 능가하는 신라 호텔의 위상 마냥 요즘은 조선은 안나오고 신라만 나오는 시대이긴 하다.  울창한 숲과 기암괴석이 남해 바다와 어우러진 비경으로 유명한 곳.  위키백과에 의하면 태종대는 9천만 년 전엔 호수였지만 신생대에 와서 풍화되어 현재까지 온 것이다.</div>' +
   //         '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>',
        latlng: new kakao.maps.LatLng(35.052475, 129.09254444444446 ),
        removable: true
    },
    {
            content: '<div class="wrap">' +
            '    <div>' +
            '        <h3>' +
            '            피아노계단' +
            '        </h3><p><a href="/Pianostair/" target="_blank" class="link">홈페이지</a></p>' +
            '        <div class="map_info">' +
            '            <div class="map_img">' +
            '                <img src="/static/imgs/2.png" width="73" height="70">' +
            '           </div>' +
            '            <div class="desc">' +
            '                <div><p>부산시 영도구 영선동4가</p></div>' +
            '                <div><p>이용시간: 24시간</p></div>' +
//            '                <div><a href="/Pianostair/" target="_blank" class="link">홈페이지</a></div>' +
            '            </div>' +
   //         '            <div class="desc">' +
   //         '                <div>1990년대 말 절영해안산책로 개설 때 만들어진 피아노계단은 이송도 전망대와 맞닿아있습니다.</div>' +
   //         '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>',
        latlng: new kakao.maps.LatLng(35.07573611111111, 129.04757777777778 ),
        removable: true
    },
];

var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; // 마커이미지의 주소입니다    

for (var i = 0; i < positions.length; i ++) {
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35); 

    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커의 위치
        image : markerImage // 마커 이미지 
    });

    // 마커에 표시할 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content, // 인포윈도우에 표시할 내용
        removable: positions[i].removable
    });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow));
    //kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
//function makeOutListener(infowindow) {
 //   return function() {
 //       infowindow.close();
 //   };
//}

////////////////////////////////////////////////////////////////////////////////////////////////
//var MARKER_WIDTH = 33, // 기본, 클릭 마커의 너비
//    MARKER_HEIGHT = 36, // 기본, 클릭 마커의 높이
//    OFFSET_X = 12, // 기본, 클릭 마커의 기준 X좌표
//    OFFSET_Y = MARKER_HEIGHT, // 기본, 클릭 마커의 기준 Y좌표
//    OVER_MARKER_WIDTH = 40, // 오버 마커의 너비
//    OVER_MARKER_HEIGHT = 42, // 오버 마커의 높이
//    OVER_OFFSET_X = 13, // 오버 마커의 기준 X좌표
//    OVER_OFFSET_Y = OVER_MARKER_HEIGHT, // 오버 마커의 기준 Y좌표
//    SPRITE_MARKER_URL = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markers_sprites2.png', // 스프라이트 마커 이미지 URL
//    SPRITE_WIDTH = 126, // 스프라이트 이미지 너비
//    SPRITE_HEIGHT = 146, // 스프라이트 이미지 높이
//    SPRITE_GAP = 10; // 스프라이트 이미지에서 마커간 간격
//
//var markerSize = new kakao.maps.Size(MARKER_WIDTH, MARKER_HEIGHT), // 기본, 클릭 마커의 크기
//    markerOffset = new kakao.maps.Point(OFFSET_X, OFFSET_Y), // 기본, 클릭 마커의 기준좌표
//    overMarkerSize = new kakao.maps.Size(OVER_MARKER_WIDTH, OVER_MARKER_HEIGHT), // 오버 마커의 크기
//    overMarkerOffset = new kakao.maps.Point(OVER_OFFSET_X, OVER_OFFSET_Y), // 오버 마커의 기준 좌표
//    spriteImageSize = new kakao.maps.Size(SPRITE_WIDTH, SPRITE_HEIGHT); // 스프라이트 이미지의 크기
//
//
//var list_lat = document.getElementById('lat').innerText.split(',');
//var list_lng = document.getElementById('lng').innerText.split(',');
//var list_title = document.getElementById('title').innerText.split(',');
//
//var positions= new Array();
//var selectedMarker = null; // 클릭한 마커를 담을 변수
//for(var i=0; i < list_title.length; i++){
//    var latitude = list_lat[i];
//    var longitude = list_lng[i];
//    positions.push(new kakao.maps.LatLng(latitude, longitude));
//}
//
//var mapContainer = document.getElementById('map'), // 지도를 표시할 div
//    mapOption = {
//        center: new kakao.maps.LatLng(35.07476207691191, 129.05489956321324), // 지도의 중심좌표
//        level: 6 // 지도의 확대 레벨
//    };
//
//var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
//
//// 지도 위에 마커를 표시합니다
//for (var i = 0, len = positions.length; i < len; i++) {
//    var gapX = (MARKER_WIDTH + SPRITE_GAP), // 스프라이트 이미지에서 마커로 사용할 이미지 X좌표 간격 값
//        originY = (MARKER_HEIGHT + SPRITE_GAP) * i, // 스프라이트 이미지에서 기본, 클릭 마커로 사용할 Y좌표 값
//        overOriginY = (OVER_MARKER_HEIGHT + SPRITE_GAP) * i, // 스프라이트 이미지에서 오버 마커로 사용할 Y좌표 값
//        normalOrigin = new kakao.maps.Point(0, originY), // 스프라이트 이미지에서 기본 마커로 사용할 영역의 좌상단 좌표
//        clickOrigin = new kakao.maps.Point(gapX, originY), // 스프라이트 이미지에서 마우스오버 마커로 사용할 영역의 좌상단 좌표
//        overOrigin = new kakao.maps.Point(gapX * 2, overOriginY); // 스프라이트 이미지에서 클릭 마커로 사용할 영역의 좌상단 좌표
//
//    // 마커를 생성하고 지도위에 표시합니다
//    addMarker(positions[i], normalOrigin, overOrigin, clickOrigin);
//}
//
//// 마커를 생성하고 지도 위에 표시하고, 마커에 mouseover, mouseout, click 이벤트를 등록하는 함수입니다
//function addMarker(position, normalOrigin, overOrigin, clickOrigin) {
//
//    // 기본 마커이미지, 오버 마커이미지, 클릭 마커이미지를 생성합니다
//    var normalImage = createMarkerImage(markerSize, markerOffset, normalOrigin),
//        overImage = createMarkerImage(overMarkerSize, overMarkerOffset, overOrigin),
//        clickImage = createMarkerImage(markerSize, markerOffset, clickOrigin);
//
//    // 마커를 생성하고 이미지는 기본 마커 이미지를 사용합니다
//    var marker = new kakao.maps.Marker({
//        map: map,
//        position: position,
//        image: normalImage
//    });
//
//    // 마커 객체에 마커아이디와 마커의 기본 이미지를 추가합니다
//    marker.normalImage = normalImage;
//
//    // 마커에 mouseover 이벤트를 등록합니다
//    kakao.maps.event.addListener(marker, 'mouseover', function() {
//
//        // 클릭된 마커가 없고, mouseover된 마커가 클릭된 마커가 아니면
//        // 마커의 이미지를 오버 이미지로 변경합니다
//        if (!selectedMarker || selectedMarker !== marker) {
//            marker.setImage(overImage);
//        }
//    });
//
//    // 마커에 mouseout 이벤트를 등록합니다
//    kakao.maps.event.addListener(marker, 'mouseout', function() {
//
//        // 클릭된 마커가 없고, mouseout된 마커가 클릭된 마커가 아니면
//        // 마커의 이미지를 기본 이미지로 변경합니다
//        if (!selectedMarker || selectedMarker !== marker) {
//            marker.setImage(normalImage);
//        }
//    });
//
//    // 마커에 click 이벤트를 등록합니다
//    kakao.maps.event.addListener(marker, 'click', function() {
//
//        // 클릭된 마커가 없고, click 마커가 클릭된 마커가 아니면
//        // 마커의 이미지를 클릭 이미지로 변경합니다
//        if (!selectedMarker || selectedMarker !== marker) {
//
//            // 클릭된 마커 객체가 null이 아니면
//            // 클릭된 마커의 이미지를 기본 이미지로 변경하고
//            !!selectedMarker && selectedMarker.setImage(selectedMarker.normalImage);
//
//            // 현재 클릭된 마커의 이미지는 클릭 이미지로 변경합니다
//            marker.setImage(clickImage);
//        }
//
//        // 클릭된 마커를 현재 클릭된 마커 객체로 설정합니다
//        selectedMarker = marker;
//    });
//}
//
//// MakrerImage 객체를 생성하여 반환하는 함수입니다
//function createMarkerImage(markerSize, offset, spriteOrigin) {
//    var markerImage = new kakao.maps.MarkerImage(
//        SPRITE_MARKER_URL, // 스프라이트 마커 이미지 URL
//        markerSize, // 마커의 크기
//        {
//            offset: offset, // 마커 이미지에서의 기준 좌표
//            spriteOrigin: spriteOrigin, // 스트라이프 이미지 중 사용할 영역의 좌상단 좌표
//            spriteSize: spriteImageSize // 스프라이트 이미지의 크기
//        }
//    );
//
//    return markerImage;
//}
///////////////////////////////////////////////////////////////////////////////////////////////
//var mapContainer = document.getElementById('map'), // 지도를 표시할 div
//    mapOption = {
//        center: new kakao.maps.LatLng(35.07476207691191, 129.05489956321324), // 지도의 중심좌표
//        level: 7 // 지도의 확대 레벨
//    };
//
//// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
//var map = new kakao.maps.Map(mapContainer, mapOption);
//
//var list_lat = document.getElementById('lat').innerText.split(',');
//var list_lng = document.getElementById('lng').innerText.split(',');
//var list_title = document.getElementById('title').innerText.split(',');
//
//var photoZoneCoordinates= new Array();
//
//for(var i=0; i < list_title.length; i++){
//    var latitude = list_lat[i];
//    var longitude = list_lng[i];
//    photoZoneCoordinates.push(new kakao.maps.LatLng(latitude, longitude));
//}
//for(var i =0; i < photoZoneCoordinates.length; i++){
//    var marker = new kakao.maps.Marker({
//        map: map,
//        position: photoZoneCoordinates[i],
//        title: list_title[i],
//        clickable: true
//    });
//
//    var infoWindow = new kakao.maps.InfoWindow({
//        content: list_title[i],
//        removable: true
//
//    });
//    //////////////////////////////////
//    (function(marker, infoWindow){
//        kakao.maps.event.addListener(marker, 'click', function(mouseEvent){
//            infoWindow.open(map, marker);
//        })
//
//        kakao.maps.event.addListener(marker, 'mouseover', function(){
//            infoWindow.open(map, marker);
//        });
//
////        kakao.maps.event.addListener(marker, 'mouseout', function(){
////            infoWindow.close();
////        });
//    })(marker, infoWindow);
//}
//marker.setMap(map);

//////////////////////////////////////////////////////////
//// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다
//var positions = [
//    {
//        content: '<div>75광장</div>',
//        latlng: new kakao.maps.LatLng(35.07068747094535, 129.0580309767193 )
//    },
//    {
//        content: '<div>흰여울 터널</div>',
//        latlng: new kakao.maps.LatLng(35.075282520017524, 129.04784214698765)
//    },
//    {
//        content: '<div>태종대</div>',
//        latlng: new kakao.maps.LatLng(35.052538136263614, 129.08779719549588)
//    }
//];
//
//
//for (var i = 0; i < positions.length; i ++) {
//    // 마커를 생성합니다
//    var marker = new kakao.maps.Marker({
//        map: map, // 마커를 표시할 지도
//        position: positions[i].latlng // 마커의 위치
//    });
//
//    // 마커에 표시할 인포윈도우를 생성합니다
//    var infowindow = new kakao.maps.InfoWindow({
//        content: positions[i].content // 인포윈도우에 표시할 내용
//    });
//
//    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
//    // 이벤트 리스너로는 클로저를 만들어 등록합니다
//    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
//    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
//    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
//}
//
//// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
//function makeOverListener(map, marker, infowindow) {
//    return function() {
//        infowindow.open(map, marker);
//    };
//}
//
//// 인포윈도우를 닫는 클로저를 만드는 함수입니다
//function makeOutListener(infowindow) {
//    return function() {
//        infowindow.close();
//    };
//}