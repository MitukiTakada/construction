$(document).ready(function() {
  $('.humberger-menu').click(function () {
    $('#header').toggleClass('open');
  });
  $('#mask').click(function () {
    $('#header').toggleClass('open');
  });
  $('.to-top').hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
      $('.to-top').fadeIn();
    } else {
      $('.to-top').fadeOut();
    }
  });
  $('.to-top').click(function() {
    $('html, body').animate({'scrollTop':'0'}, 500);
    return false;
  });
});

