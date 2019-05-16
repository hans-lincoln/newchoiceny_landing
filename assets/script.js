$(document).ready(function() {
  // Redirect to old NewChoiceNY form
  // $('.opt-form form').on('submit', function(e) {
  //   e.preventDefault();
  //   window.location = 'https://www.newchoiceny.com/opt-out-today/';
  // });

  var employerNotFound = false;
  var unionNotFound = false;

  $("#union_not_listed").change(function() {
    if(this.checked) {
      $('#union_name').attr('disabled', 'disabled');
      $('.custom_union').show();
      unionNotFound = true;
    } else {
      $('#union_name').removeAttr('disabled');
      $('.custom_union').hide();
      unionNotFound = false;
    }
  });

  $("#emp_not_listed").change(function() {
    if(this.checked) {
      $('#employer_name').attr('disabled', 'disabled');
      $('.custom_employer').show();
      employerNotFound = true;
    } else {
      $('#employer_name').removeAttr('disabled');
      $('.custom_employer').hide();
      employerNotFound = false;
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
          res.data.counties.forEach(function(employer) {
            $('<option>')
              .attr({ 
                value: employer.name,
                'data-email': employer.email,
                'data-fax': employer.fax
              })
              .text(employer.name)
              .appendTo('#employer_name');
          });
        }
      },
      error: function() {

      }
    })

  })

  // orgType must be 'employer' or 'union'
  function getOrgName(orgType) {
    if (eval(orgType+'NotFound')) {
      return $("input[name='custom_"+orgType+"_name']")[0].value;
    }

    return $('#'+orgType+'_name option:selected').text();
  }

  $('#final_form').submit(function(event) {
    event.preventDefault();

    var hookUrl = 'https://api.edunity.us/v1/submissions';
    var data = {
      campaign_uuid: 'e7158017-282f-482d-9ffa-c3281493296f',
      first_name: this.first_name.value,
      last_name: this.last_name.value,
      address_1: this.address_1.value,
      address_2: this.address_2.value,
      city: this.city.value,
      state: "New York",
      zip: this.zipcode.value,
      phone: this.phone_number.value,
      email: this.email.value,
      union_name: getOrgName('union'),
      custom_field_4: $('#employer_county option:selected').data('email'),
      custom_field_5: $('#employer_name option:selected').data('email'),
      custom_field_6: $('#employer_name option:selected').data('fax'),
      custom_field_7: getOrgName('employer')
    }
    var email = this.email.value;

    $.ajax({
      url: hookUrl,
      method: 'post',
      data: data,
      success: function(res) {
        window.location = 'verify?email=' + email;
      }
    });
  })
});
