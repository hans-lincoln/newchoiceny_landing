

$(document).ready(function() {
  $('.testimonial-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });

  $('.trustworthy-carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });

  $("#not_listed").change(function() {
    if(this.checked) {
      $('#union').attr('disabled', 'disabled');
      $('.custom_union').show();
    } else {
      $('#union').removeAttr('disabled');
      $('.custom_union').hide();
    }
});
});
