new Swiper('.image-slider', {
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
   },
   autoHeight: true,
   loop: true,
   effect: 'fade',
   fadeEffect: {
      crossFade: true
   }
});