$(document).ready(function () {
  var slideWidth;
  var width = $(window).width();
  if (width < 600) {
    autoSlideOption = {
      slideWidth: 300,
      minSlides: 3,
      maxSlides: 3,
      slideMargin: 0,
      controls: false,
      auto: true,
      pager: false,
      pause: 2000
    };
    slideWidth = 300;
  } else if (width < 1024) {
    autoSlideOption = {
      slideWidth: 300,
      minSlides: 5,
      maxSlides: 5,
      slideMargin: 10,
      controls: false,
      auto: true,
      pause: 2000
    };
    slideWidth = 300;
  } else {
    autoSlideOption = {
      slideWidth: 300,
      minSlides: 5,
      maxSlides: 5,
      slideMargin: 10,
      controls: false,
      auto: true,
      pause: 2000
    };
    slideWidth = 460;
  };
  $('.slides').bxSlider(autoSlideOption);

  function changeContent(idx) {
    $('.content_box ul li').removeClass('on');
    $('.content_box ul li:eq(' + idx + ')').addClass('on');
  }

  var slider = $('.content_bg ul').bxSlider({
    slideWidth: slideWidth,
    minSlides: 1,
    maxSlides: 1,
    onSlideNext: function () {
      changeContent(slider.getCurrentSlide());
    },
    onSlidePrev: function () {
      changeContent(slider.getCurrentSlide());
    }
  });

  // 모바일 스크롤 다운 버튼 액션
  $(function () {
    $('a[href="#img_set"]').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 40
      }, 500, 'linear');
    });
  });

  // 모바일 이미지 슬라이드 스와이프
  $(".carousel-m").swipe({

    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {

      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');

    },
    allowPageScroll: "vertical"

  });

  $('.partners-interviews').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
    dots: false
  });


});