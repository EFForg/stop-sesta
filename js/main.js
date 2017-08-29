$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.navbar-inverse').fadeIn(500);
        } else {
            $('.navbar-inverse').fadeOut(500);
        }
    });



    $('a[href="#take-action"]').click(function () {
      $('html, body').animate({
        scrollTop: $("#take-action").offset().top - 15
      }, 600);
    });



    $('a[href="#who-we-are"]').click(function () {
      $('html, body').animate({
        scrollTop: $("#who-we-are").offset().top - 15
      }, 600);
    });


    $('a[href="#quotes"]').click(function () {
      $('html, body').animate({
        scrollTop: $("#quotes").offset().top - 20
      }, 600);
    });

    $('a[href="#top"]').click(function () {
      $('html, body').animate({
        scrollTop: $("#top").offset().top - 15
      }, 600);
    });

    // Hide navbar on click.
    $('.nav a').on('click', function(){
      if ($('.navbar-toggle').css('display') != 'none') {
        $('.navbar-toggle').click();
      }
    });

});
