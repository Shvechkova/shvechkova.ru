$(document).ready(function () {


  $('.owl-carousel').owlCarousel({

    items: 3,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    margin: 30,
    dots: true,
    responsive: {
      0: {
        items: 2,
        loop: true

      },
      600: {
        items: 2,

      },
      900: {
        items: 3,

      },
      1200: {
        item: 3
      }
    }
  });


  $('.project-slaider ').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    infinite: true,
    prevArrow: "<img src='/images/arrow-left.png' class='prev' alt='1'>",
    nextArrow: "<img src='/images/arrow-right.png' class='next' alt='2'>",
  });


  $('.rate-slaider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplaySpeed: 1000,
    infinite: true,
    prevArrow: "<img src='images/arrow-left.png' class='prev' alt='1'>",
    nextArrow: "<img src='images/arrow-right.png' class='next' alt='2'>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        },



      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        },



      }

    ]
  });



  $('.partners-slaider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,


    infinite: true,
    prevArrow: "<img src='images/arrow-left.png' class='prev1' alt='1'>",
    nextArrow: "<img src='images/arrow-right.png' class='next1' alt='2'>",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        },



      },


      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        },



      }

    ]
  });

  $('.review__slick ').slick({
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    infinite: false,
    dots: true,
    // infinite: true,
    prevArrow: "<img src='images/arrow-left.png' class='prev' alt='1'>",
    nextArrow: "<img src='images/arrow-right.png' class='next' alt='2'>",

  });




});

const navSticky = document.querySelector("#navSticky");


window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    navSticky.classList.add("nav-sticky--active");
  } else {
    navSticky.classList.remove("nav-sticky--active");
  }
});




$('.button').on('click', function () {

  $('body').addClass('no-scroll');
  $(".modal").addClass('modal--activ');

});

$('.modal').on('click', function () {
 

  $('body').toggleClass('no-scroll');
  $(".modal").toggleClass('modal--activ');

});

$('.modal__content').on('click', function (event) {
  event.stopPropagation();

  $('.modal__btn-close').on('click', function (event) {
    event.preventDefault();

    $('body').toggleClass('no-scroll');
    $(".modal").toggleClass('modal--activ');

  });

});


$(document).ready(function () {
  $('.logo_burger').click(function () {
    $('.nav').toggleClass('nav__mobi');
    $('.header__contacts').toggleClass('header__contacts__mobi');



  });





});



$(document).ready(function () {
  $('.nav__link').click(function () {
    $('.nav').toggleClass('nav__mobi');
    $('.header__contacts').toggleClass('header__contacts__mobi');



  });
  });


$(document).ready(function () {
  $('.btn__header').click(function () {
    $('.nav').toggleClass('nav__mobi');
    $('.header__contacts').toggleClass('header__contacts__mobi');



  });
});


$(document).ready(function () {
  $("#basic-form").validate({
    rules: {

      name: {
        required: true
      },

      phone: {
        required: true
      }
    },
    messages: {

      name: {
        required: 'Поле не должно быть пустым'
      },

      phone: {
        required: 'Поле не должно быть пустым'
      }
    },
  });
});
