$(function(){

  //ie判定
  var userAgent = window.navigator.userAgent.toLowerCase();
  if(userAgent.indexOf('msie') != -1 ||
        userAgent.indexOf('trident') != -1) {
          $('.sns-btn').hide();
          $('.calendar').hide();
          $('.slide').css('width', '100%');
          // if($(window).width > 768) {
          //   $('.new_fishes_images')
          // }
          $('.new_fish:before, .new_fish:after').hide();
        }


  //page-top

  $('.top-btn').click(function() {
    $('html, body').animate({
      scrollTop:0
    }, 400);
  });

  //scroll-btn 
  $('.scroll-btn').click(function() {
    var id = $(this).attr('href');
    var position =$(id).offset().top;
    $('html, body').animate({
      scrollTop:position
    }, 300);
  });

  var pagetop = $('#page-top');
  pagetop.hide();
  $('.mainvisual_fade').hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
          $('.menu-btn').fadeIn();
          $('.mainvisual_fade').fadeIn();
          $('.under_arrow').fadeOut();
     } else {
          pagetop.fadeOut();
          $('.mainvisual_fade').fadeOut();
          $('.under_arrow').fadeIn();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
  });

  // slick

  $('.slide').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    vertical: true,
    centerMode: true,
  });

//rellax PCのみにします
var rellax = new Rellax('.rellax', {
  breakpoints:[576, 768, 1024] 
});
//3つめの数値のみ使います

  var today = new Date();
  var month = today.getMonth();
  var day = today.getDate();

  $('#today').text(month + 1 + '月' + day + '日');

  $('.menu-btn').click(function(){
    if($('.menu-modal').css('display') == 'block') {
      $('.menu-modal').slideUp();
    } else {
      $('.menu-modal').slideDown();
    }
  });

});