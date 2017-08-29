$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.navbar-inverse').fadeIn(500);
        } else {
            $('.navbar-inverse').fadeOut(500);
        }
    });

    // Hide navbar on click.
    $('.nav a').on('click', function(){
      if ($('.navbar-toggle').css('display') != 'none') {
        $('.navbar-toggle').click();
      }
    });

});
