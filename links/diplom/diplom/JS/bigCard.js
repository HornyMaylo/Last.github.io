"use strict"

window.onload = function () {
   const parallax = document.querySelector('.bigCard__images'); 

   if (parallax) {
      const content = document.querySelector('.bigCard__container');
      const gamepad = document.querySelector('.images-paralax__gamepad');
      const mouse = document.querySelector('.images-paralax__mouse');
      const keyboard = document.querySelector('.images-paralax__keyboard');

      //Коэфициенты
      const forGamepad = 12;
      const forMouse = 12;
      const forKeyboard = 12;

      //Скорость
      const speed = 1.9;

      //Переменные
      let positionX = 0, positionY = 0;
      let coordXprocent = 0, coordYprocent = 0;

      function setMouseParallaxStyle() {
         const distX = coordXprocent - positionX;
         const distY = coordYprocent - positionY;

         positionX = positionX + (distX * speed);
         positionY = positionY + (distY * speed);

         //Передача стилей
         gamepad.style.cssText = `transform: translate(${positionX / forGamepad}%,${positionY / forGamepad}%);`;
         mouse.style.cssText = `transform: translate(${positionX / forMouse}%,${positionY / forMouse}%);`;
         keyboard.style.cssText = `transform: translate(${positionX / forKeyboard}%,${positionY / forKeyboard}%);`;

         requestAnimationFrame(setMouseParallaxStyle);
      }
      setMouseParallaxStyle();
      parallax.addEventListener("mousemove", function (e){
         console.log('Я жива');
         const parallaxWidth = parallax.offsetWidth;
         const parallaxHeight = parallax.offsetHeight;

         const cordX = e.pageX - parallaxWidth / 2;
         const cordY = e.pageY - parallaxHeight / 2;

         coordXprocent = cordX / parallaxWidth * 100;
         coordYprocent = cordY / parallaxHeight * 100;
      })
   }
}