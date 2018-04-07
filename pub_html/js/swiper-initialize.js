$(document).ready(function() {
  //initialize swiper when document ready
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: false,
    autoHeight: true,
    lazy: true,
    slidesPerView: 'auto', // set width to auto: https://github.com/nolimits4web/Swiper/issues/742
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })
});
