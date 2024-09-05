$(function(){
    "use strict";

    //  Preloader


    $(window).on('load', function () {
      $(".preloader").fadeOut("slow",function(){
        $(this).remove();
      });
    });

    // fixed menu js
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$("#sticky-header").removeClass("sticky-menu");
			$("#header-fixed-height").removeClass("active-height");

		} else {
			$("#sticky-header").addClass("sticky-menu");
			$("#header-fixed-height").addClass("active-height");
		}
	});

$('.projects-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.employess-slider').slick({
    dots: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  });

  $('.testimonial-slider').slick({
    dots: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  });

  $('.projects-slider-prev').on('click', function () {
    $('.projects-slider').slick('slickPrev');
  });
  $('.projects-slider-next').on('click', function () {
    $('.projects-slider').slick('slickNext');
  });

  	/* Odometer Active js */
	$('.odometer').appear(function (e) {
		var odo = $(".odometer");
		odo.each(function () {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

    // scroll to top js
    var btn = $(".scroll-to-top");

    $(window).scroll(function () {
      btn.toggleClass("show", $(window).scrollTop() > 300);
    });
  
    btn.click(function (e) {
      e.preventDefault();
      if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
        $("html").animate({
            scrollTop: 0,
          },
          800
        );
      } else {
        $("html, body").animate({
            scrollTop: 0,
          },
          0
        );
      }
    });
  
});


