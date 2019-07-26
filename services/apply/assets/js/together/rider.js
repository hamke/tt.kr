$(function() {
  var apiDomain = hpGlobal.backoffice_domain;

  $("#top_rider_form").submit(function(event) {
    event.preventDefault();
  }).validate({
    onfocusout: false,
    onclick: false,
    onkeyup: false,
    rules: {
      name: 'required',
      contact: 'required',
      address: 'required',
      licence: 'required',
      haveCar: 'required',
      experience: 'required',
      deliveryLocation: 'required',
    },
    messages: {
      name: "이름을 입력해 주세요",
      contact: "연락처를 입력해 주세요",
      address: "거주지를 입력해 주세요.",
      licence: "면허정보를 입력해 주세요.",
      haveCar: "자차 보유 여부를 선택해 주세요.",
      experience: "경험 유무를 선택해 주세요",
      deliveryLocation: '희망 배송 지역을 입력해 주세요',
    },
    errorPlacement: function (error, element) {
    },
    invalidHandler: function(event, validator){
      var errors = validator.invalid;
      alert(errors[Object.keys(errors)[0]]);
    },
    submitHandler: function(form){
      var data = $(form).serializeArray();
      
      var filter = "win16|win32|win64|mac|macintel"
      if(filter.indexOf( navigator.platform.toLowerCase() ) < 0) {
        data[8] = {name:"pcOrMobile", value:"모바일"}
      } else {
        data[8] = {name:"pcOrMobile", value:"PC"}
      }
      
      $.ajax({
        type: "POST",
        url: apiDomain + '/api/v1/rider',
        data: data,
        success: function(data) {
          fbq('trackCustom', 'applyRider', {
            'apply': 1
          }); // 라이더 신청 Facebook Pixel

          window.location.replace("/together/rider_done");
        },
        error: function(data) {
          alert('작성 실패');
        }
      });
      return false
    }
  });
  $("#bottom_rider_form").submit(function(event) {
    event.preventDefault();
  }).validate({
    onfocusout: false,
    onclick: false,
    onkeyup: false,
    rules: {
      name: 'required',
      contact: 'required',
      address: 'required',
      licence: 'required',
      haveCar: 'required',
      experience: 'required',
      deliveryLocation: 'required',
    },
    messages: {
      name: "이름을 입력해 주세요",
      contact: "연락처를 입력해 주세요",
      address: "거주지를 입력해 주세요.",
      licence: "면허정보를 입력해 주세요.",
      haveCar: "자차 보유 여부를 선택해 주세요.",
      experience: "경험 유무를 선택해 주세요",
      deliveryLocation: '희망 배송 지역을 입력해 주세요',
    },
    errorPlacement: function (error, element) {
    },
    invalidHandler: function(event, validator){
      var errors = validator.invalid;
      alert(errors[Object.keys(errors)[0]]);
    },
    submitHandler: function(form){
      var data = $(form).serializeArray();

      var filter = "win16|win32|win64|mac|macintel"
      if(filter.indexOf( navigator.platform.toLowerCase() ) < 0) {
        data[8] = {name:"pcOrMobile", value:"모바일"}
      } else {
        data[8] = {name:"pcOrMobile", value:"PC"}
      }

      $.ajax({
        type: "POST",
        url: apiDomain + '/api/v1/rider',
        data: data,
        success: function(data) {
          fbq('trackCustom', 'applyRider', {
            'apply': 1
          }); // 라이더 신청 Facebook Pixel

          window.location.replace("/together/rider_done");
        },
        error: function(data) {
          alert('작성 실패');
        }
      });
      return false
    }
  });
})
