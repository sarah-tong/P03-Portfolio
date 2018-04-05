$(document).ready(function() {
  //initialize swiper when document ready
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: false,
    autoHeight: true,
    slidesPerView: 'auto', // set width to auto: https://github.com/nolimits4web/Swiper/issues/742
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })

  mySwiper.slideTo(0, 300, true);
});
