$(document).ready(function() {
  var employerNotFound = false;
  var unionNotFound = false;

  ['employer', 'union'].forEach(function(org) {
    $("#"+org+"_not_listed").change(function() {
      if(this.checked) {
        $('#'+org+'_name').attr('disabled', 'disabled');
        $('#custom_'+org+'_name').removeAttr('disabled');
        $('.custom_'+org).show();
        if (org === 'employer') {
          employerNotFound = true;
        } else {
          unionNotFound = true;
        }
      } else {
        $('#'+org+'_name').removeAttr('disabled');
        $('#custom_'+org+'_name').attr('disabled', 'disabled');
        $('.custom_'+org) .hide();
        if (org === 'employer') {
          employerNotFound = false;
        } else {
          unionNotFound = false;
        }
      }
    });
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

  function createEmployerOption(text, attr) {
    var option = $('<option>').attr(attr).text(text);
    option.appendTo('#employer_name');
  }

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
          createEmployerOption('Choose Employer Name*', {});
          res.data.counties.forEach(function(employer) {
            var option = createEmployerOption(employer.name, {
              value: employer.name,
              'data-email': employer.email,
              'data-fax': employer.fax
            });
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
      custom_field_4: $('#employer_county:enabled option:selected').data('email'),
      custom_field_5: $('#employer_name:enabled option:selected').data('email'),
      custom_field_6: $('#employer_name:enabled option:selected').data('fax'),
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
