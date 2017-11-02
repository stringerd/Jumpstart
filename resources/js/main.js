$(document).ready(function() {
  $('.carousel').slick({
    autoplay: true,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var initPos = 0;

  $(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    if(scrollPos > (initPos + 50)) {
      var navbarHeight = $('nav.navbar').outerHeight();
      $('nav.navbar').animate({ top: navbarHeight * -1 }, 150);
      initPos = scrollPos;
    } else if (scrollPos < (initPos - 50)) {
      $('nav.navbar').animate({ top: 0 }, 150);
      initPos = scrollPos;
    }
  });

});
