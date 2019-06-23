$(function() {
  var apiDomain = hpGlobal.backoffice_domain;

  $("#new_store_form").submit(function(event) {
    event.preventDefault();
  }).validate({
	onfocusout: false,
	onclick: false,
	onkeyup: false,
    rules: {
      name: "required",
      deliveryLocation: 'required',
      experience: "required",
      contact: "required",
      document: "required",
      availableTime : "required"
    },
    messages: {
      name: "이름을 입력해 주세요",
      deliveryLocation: "주소를 입력해 주세요.",
      experience: "경험 유무를 선택해 주세요",
      contact: "연락처를 입력해 주세요",
      email: "이메일을 입력해 주세요.",
      document: "문서를 첨부해 주세요.",
      availableTime: "가능한 시간을 선택해주세요"
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
        url: apiDomain + '/api/v1/open-store',
        data: data,
        success: function(data) {
          fbq('trackCustom', 'applyBranch', {
            'apply': 1
          }); // 지사창업문의 신청 Facebook Pixel

          window.location.replace("/together/open_done");
        },
        error: function(data) {
          alert('작성 실패');
        }
      });
      return false
    }
  });
  $("#open_store_form").submit(function(event) {
    event.preventDefault();
  }).validate({
	onfocusout: false,
	onclick: false,
	onkeyup: false,
    rules: {
      name: "required",
      contact: "required",
      deliveryLocation: 'required',
      experience: "required",
      document: "required",
      availableTime : "required",
      program: "required",
      riderNumber : "required",
      orderScaleWeek : "required",
      storeNumber : "required",
      orderScaleWeekend : "required"

    },
    messages: {
      name: "이름을 입력해 주세요",
      contact: "연락처를 입력해 주세요",
      deliveryLocation: "주소를 입력해 주세요.",
      experience: "경험 유무를 선택해 주세요",
      email: "이메일을 입력해 주세요.",
      document: "문서를 첨부해 주세요.",
      availableTime: "가능한 시간을 선택해주세요",
      program: "프로그램을 입력해 주세요.",
      riderNumber : "라이더 수를 입력해 주세요",
      orderScaleWeek : "주중 평균 콜 수를 입력해 주세요.",
      storeNumber : "가맹점수를 입력해 주세요.",
      orderScaleWeekend : "주말 평균 콜 수를 입력해 주세요."
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
        url: apiDomain + '/api/v1/open-store',
        data: data,
        success: function(data) {
          fbq('trackCustom', 'applyBranch', {
            'apply': 1
          }); // 지사창업문의 신청 Facebook Pixel

          window.location.replace("/together/open_done");
        },
        error: function(data) {
          alert('작성 실패');
        }
      });
      return false
    }
  })
})
