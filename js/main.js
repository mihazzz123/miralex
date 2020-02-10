$(document).ready(function() {


  $('.header-slider__wrap').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 1,
      slidesToScroll: 1,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      prevArrow: '<div class="header-slider__arrow header-slider__arrow-left center"><img src="img/arrow.svg" alt=""></div>',
      nextArrow: '<div class="header-slider__arrow header-slider__arrow-right center"><img src="img/arrow.svg" alt=""></div>',
      responsive: [
        {
          breakpoint: 768, 
          settings: {
            centerMode: false,
            variableWidth: false,
            slidesToShow: 1,
          }
        }
      ]
    });
    
    $('.photo-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      prevArrow: '<div class="photo-slider__arrow photo-slider__arrow-left"></div>',
      nextArrow: '<div class="photo-slider__arrow photo-slider__arrow-right"></div>',
      responsive: [
        {
          breakpoint: 1200, 
          settings: {
            slidesToShow: 3,
          }
        },
          {
            breakpoint: 902, 
            settings: {
              slidesToShow: 2,
          }   
        },
          {
            breakpoint: 600, 
            settings: {
              slidesToShow: 1,
          }   
        }
      ]
  });
  $('.offer-timer').syotimer({
    // Укажите дату когда таймер должен остановиться
    year: 2019,
    month: 10,
    day: 30,
    hour: 8,
    minute: 55,
    doubleNumbers:true,
    lang: 'rus'
  });

  $('.offer-lost__block-input').click(function() {
    $(this).find('input').focus();
  });
  
  $('.faq-item__title').on('click', function() {
    $(this).find('.faq-item__open').toggleClass('faq-item__open_active');
    $(this).parent('.faq-item').toggleClass('faq-item_active');
    if($(this).parent('.faq-item').hasClass('faq-item_active')){
      $('.faq-item__open').removeClass('faq-item__open_active');
      $('.faq-answer').animate({'height' : 'hide'}, 300);
      $('.faq-item').removeClass('faq-item_active');
      $(this).find('.faq-item__open').addClass('faq-item__open_active');
      $(this).parent('.faq-item').addClass('faq-item_active');
      $(this).parent('.faq-item').find('.faq-answer').animate({'height' : 'show'}, 300);
    } else {
      $(this).parent('.faq-item').find('.faq-answer').animate({'height' : 'hide'}, 300);
    }
  });

  $('.open-modal-call').on('click', function() {
    $('.modal-call').fadeIn(300);
    $('.modal-wrap').fadeIn(300);
  });

  $('.open-modal-bay').on('click', function() {
    $('.modal-bay').fadeIn(300);
    $('.modal-wrap').fadeIn(300);
  });
  
  $('.sport-item__lost').on('click', function() {
    $('.modal-video').fadeIn(300);
    $('.modal-wrap').fadeIn(300);
  });
  
  $('.modal-wrap').on('click', function() {
    $('.modal-video').fadeOut(300);
    $('.modal-bay').fadeOut(300);
    $('.modal-call').fadeOut(300);
    $('.modal-wrap').fadeOut(300);
  });
  $('.modal-close').on('click', function() {
    $('.modal-video').fadeOut(300);
    $('.modal-bay').fadeOut(300);
    $('.modal-call').fadeOut(300);
    $('.modal-wrap').fadeOut(300);
  });
  
  $('form').submit(function (e) {
    e.preventDefault();
    var data = $(this).serializeArray();
    $.ajax({
        type: "POST",
        url: 'mail.php',
        data: data
    }).done(function() {
      window.open("thanks.html", "_blank");
      //  alert("Отправлено");
    });
  });

  $('a.button-main').on('click', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });

  $('.parallax').scrolly();

  var i = 0;
  var item = $('.arrow-anim').length;
  function anim() {
    setInterval(function() {
      $('.arrow-anim').eq(i).animate({'opacity' : '0.4'});
      i = i + 1;
      $('.arrow-anim').eq(i).animate({'opacity' : '0.8'});
      if(i > item){
        setTimeout(function() {
          i = -1;
        }, 500);
      }
    },250);
  }
  anim();

});
