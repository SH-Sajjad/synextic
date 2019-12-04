$('.carousel').carousel({
    interval: 1500
});
var swiper = new Swiper('.clients_slider', {
    cssMode: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.icon_right',
        prevEl: '.icon_left',
    },
});

  var swiper = new Swiper('.service_slide', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.right',
      prevEl: '.left',
    },
  });

$(function () {
    
})
