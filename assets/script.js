$(document).ready(function() {
  // Redirect to old NewChoiceNY form
  // $('.opt-form form').on('submit', function(e) {
  //   e.preventDefault();
  //   window.location = 'https://www.newchoiceny.com/opt-out-today/';
  // });

  $("#union_not_listed").change(function() {
    if(this.checked) {
      $('#union').attr('disabled', 'disabled');
      $('.custom_union').show();
    } else {
      $('#union').removeAttr('disabled');
      $('.custom_union').hide();
    }
  });

  $("#emp_not_listed").change(function() {
    if(this.checked) {
      $('#employer_name').attr('disabled', 'disabled');
      $('.custom_employer').show();
    } else {
      $('#employer_name').removeAttr('disabled');
      $('.custom_employer').hide();
    }
  });

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

  $('#employer_county').change(function(evt) {
    if (!evt.target.value) {
      return;
    }
    var api = './county.php?county=' + evt.target.value;
    $.ajax({
      url: api,
      method: 'get',
      dataType: 'json',
      success: function(res) {
        if (res.data) {
          $('#employer_name').empty();
          res.data.counties.forEach(function(county) {
            $('#employer_name').append($('<option></option>').attr('value', county.email).text(county.name));
          })
        }
      },
      error: function() {

      }
    })

  })
});
