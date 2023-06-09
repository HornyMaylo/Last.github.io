let firstBullet = document.querySelector('.circle_1');
let secondBullet = document.querySelector('.circle_2');
let thirdBullet = document.querySelector('.circle_3');

let img = document.querySelector('.introSlider'); 

firstBullet.addEventListener('click', () => {
   img.style.background = 'url(src/img/1.jpg) no-repeat';
   img.style.backgroundSize = 'cover';
   //1
   firstBullet.classList.remove('fa-regular');
   firstBullet.classList.add('fa-solid');
   //2
   secondBullet.classList.remove('fa-solid');
   secondBullet.classList.add('fa-regular');
   //3
   thirdBullet.classList.remove('fa-solid');
   thirdBullet.classList.add('fa-regular');
});

secondBullet.addEventListener('click', () => {
   img.style.background = 'url(src/img/2.jpg) no-repeat';
   img.style.backgroundSize = 'cover';
   //1
   firstBullet.classList.remove('fa-solid');
   firstBullet.classList.add('fa-regular');
   //2
   secondBullet.classList.remove('fa-regular');
   secondBullet.classList.add('fa-solid');
   //3
   thirdBullet.classList.remove('fa-solid');
   thirdBullet.classList.add('fa-regular');
});

thirdBullet.addEventListener('click', () => {
   img.style.background = 'url(src/img/3.jpg) no-repeat';
   img.style.backgroundSize = 'cover';
   //1
   firstBullet.classList.remove('fa-solid');
   firstBullet.classList.add('fa-regular');
   //2
   secondBullet.classList.remove('fa-solid');
   secondBullet.classList.add('fa-regular');
   //3
   thirdBullet.classList.remove('fa-regular');
   thirdBullet.classList.add('fa-solid');
});

