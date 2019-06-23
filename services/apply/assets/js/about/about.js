$(document).ready(function() {
  var slideOption,
    slideWidth,
    width = $(window).width();

  if (width < 600) {
    slideOption = {
      slideWidth: 300,
      minSlides: 2,
      maxSlides: 2,
      slideMargin: 10,
      pager: false
    };
  } else if (width < 1024) {
    slideOption = {
      slideWidth: 300,
      minSlides: 3,
      maxSlides: 3,
      slideMargin: 10,
      pager: false
    };
  } else {
    slideOption = {
      slideWidth: 300,
      minSlides: 3,
      maxSlides: 3,
      slideMargin: 10,
      pager: false
    };
  }

  $('.photos').bxSlider({
    slideWidth: 960,
    minSlides: 1,
    maxSlides: 1,
    controls: false
  });

  $('.slides').bxSlider(slideOption);
});
