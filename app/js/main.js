


$(document).ready(function() {
    $('.header__menu-btn').click(function() {
        $('.header__menu-btn').toggleClass('open-menu');
        $('.menu').toggleClass('open-menu');
    });
   


});



// $(function () {
//     $(".header__slaider").slick({
//       arrows: false,
//       autoplay: true,
//       autoplaySpeed: 500,
//       fade: true,
     
//     });
//   });
  

$(function () {
    $(".header__slaider").slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1800,
      fade: true,
     
    });
  });

  $(function(){
    new WOW().init(); 
  });