new Swiper('.image-slider', {
   navigation: {
      nextEl: '.next',
      prevEl: '.prev',
   },
   simulateTouch: false,
   slidesPerView: 3,
   spaceBetween: 30,
   initialSlide: 3,
   centeredSlides: true,
   effect: "coverflow",
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
   },
});