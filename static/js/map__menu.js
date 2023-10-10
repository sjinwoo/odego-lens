const menuBtn = document.querySelector('.side__menu__btn');
const section = document.querySelector('.side__menu');
const label = document.querySelector('label');

menuBtn.addEventListener('click', function(){
  section.getElementsByClassName.left = 0;
  label.style.opacity = 0;
})

menuBtn.addEventListener('blur', function(){
  section.style.right = '-200px';
  label.style.opacity = 1; 
})