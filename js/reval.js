ScrollReveal({ 
   reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200
});

ScrollReveal().reveal('.home-content, .title, .services-title, .portfolio-title, .contact-title', {origin: 'top'});

ScrollReveal().reveal('.home-content h3, .about-img img, .services-item._1, .portfolio-box._1, .input-box ._1', {origin: 'left'});

ScrollReveal().reveal('.home-content h1, .home-content p, .about-content, .services-item._3, .portfolio-box._2, .input-box ._2', {origin: 'right'});

ScrollReveal().reveal('.home-img, .services-item._2, textarea, .submit_btn', {origin: 'bottom'});