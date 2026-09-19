$(function () {
  $(".fairy-tail__slaider").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="img/arrow-prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="img/arrow-next.svg" alt=""></button>',
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
  });

  $(".our-trip__slaider").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="img/arrow-prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="img/arrow-next.svg" alt=""></button>',
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    responsive: [{ 
      breakpoint: 601, settings: { arrows: false } 
    }],
  });

  $(".menu,.fairy-tail__body").on("click", "a", function (event) {
    event.preventDefault();

    var id = $(this).attr("href"),
      top = $(id).offset().top;

    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
