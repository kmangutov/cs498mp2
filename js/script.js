$(document).ready(function(){

  $('.main-carousel').slick({
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  var y_home = $('#home').offset().top;
  var y_products = $('#products').offset().top;
  var y_about_us = $('#about-us').offset().top;

  var link_home = $('#link-home');
  var link_products = $('#link-products');
  var link_about_us = $('#link-about-us');



  $(window).on('scroll', function() {

    var scroll = $(window).scrollTop();

    /*if(scroll > 10)
      $('.nav').addClass("past-main");
    else
      $('.nav').removeClass("past-main");*/

    if(scroll < y_products)
      link_home.parent().addClass("active");
    else
      link_home.parent().removeClass("active");

    if(scroll >= y_products && scroll < y_about_us) 
      link_products.parent().addClass("active");
    else
      link_products.parent().removeClass("active");

    if(scroll >= y_about_us)
      link_about_us.parent().addClass("active");
    else
      link_about_us.parent().removeClass("active");
  });



  $('#link-home').on('click', function(event) {

    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

  $('#link-products').on('click', function(event) {

    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

  $('#link-about-us').on('click', function(event) {

    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });
});