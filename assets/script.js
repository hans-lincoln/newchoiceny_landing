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

  $('#final_form').submit(function(event) {
    event.preventDefault();
    console.log(this.employer_name);
    var hookUrl = 'https://hooks.zapier.com/hooks/catch/4054310/pskggg/';
    var data = {
      "attributes__email": this.email.value,
      "attributes__zip": this.zipcode.value,
      "attributes__state": '',
      "attributes__city": this.city.value,
      "attributes__last_name": this.first_name.value,
      "attributes__first_name": this.last_name.value,
      "attributes__phone": this.phone_number.value,
      "attributes__address_1": this.address_1.value,
      "attributes_employer_id": null,
      "attributes_employer_name": $('#employer_name option:selected').text(),
      "attributes_employer_email": this.employer_name.value,
      "attributes_employer_city": '',
      "attributes_employer_address_1": '',
      "attributes_employer_zip": '',
      "attributes_employer_state": '',
      "attributes_employer_fax": '',
      "attributes__custom_fields__Employer Name": $('#employer_name option:selected').text(),
      "attributes__custom_fields__Employer Email": this.employer_name.value,
      "attributes__custom_fields__Employer County": '',
      "attributes__custom_fields__Employer Fax": '',
      "attributes__union_id": null,
      "attributes__union_name": this.union.value,
      "attributes__union_email": '',
      "attributes__union_address_1": '',
      "attributes__union_state": '',
      "attributes__union_fax": '',
      "attributes__union_city": '',
      "attributes__union_zip": '',
      "attributes__user_input_union_name": this.custom_union_name.value,
      "attributes__user_input_union_address": '',
      "type": "submission"
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
