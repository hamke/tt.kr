$(function() {
  var apiDomain = hpGlobal.backoffice_domain;

  $("#store_form").submit(function(event) {
    event.preventDefault();
  }).validate({
    onfocusout: false,
    onclick: false,
    onkeyup: false,
    rules: {
      companyName: 'required',
      cLocation: 'required',
      name: 'required',
      contact: 'required',
      // email: 'required',
      itemType: 'required',
      itemDetail: 'required',
      openTime: 'required',
      closeTime: 'required',
      weekOrderScale: 'required',
      weekendOrderScale: 'required',
      deliveryLocation: 'required'
    },
    messages: {
      companyName: '회사명을 입력해 주세요.',
      cLocation: '회사 위치를 입력해 주세요.',
      name: '담당자 성명/직함을 입력해 주세요.',
      contact: '연락처를 입력해 주세요.',
      // email: '이메일을 입력해 주세요.',
      itemType: '배송품목을 입력해 주세요.',
      itemDetail: '품목 상세를 입력해 주세요.',
      openTime: '오픈 시간을 입력해 주세요.',
      closeTime: '마감 시간을 입력해 주세요.',
      weekOrderScale: '주중 평균 배송량을 입력해 주세요.',
      weekendOrderScale: '주말 평균 배송량을 입력해 주세요.',
      deliveryLocation: '희망 배송 지역을 입력해주세요.'
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
        data[14] = {name:"pcOrMobile", value:"모바일"}
      } else {
        data[14] = {name:"pcOrMobile", value:"PC"}
      }

      $.ajax({
        type: "POST",
      url: apiDomain + '/api/v1/road-shop',
        data: data,
        success: function(data) {
          fbq('trackCustom', 'applyRoadShop', {
            'apply': 1
          }); // 일반가맹점 신청 Facebook Pixel
          
          window.location.replace("/together/road_shop_done");
        },
        error: function(data) {
          alert('작성 실패');
        }
      });
      return false
    }
  });
})
