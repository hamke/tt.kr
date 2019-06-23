$(document).ready(function() {
  $('#newStore').on( "click", function(e){
    $(this).closest("form").attr("id","new_store_form");
    $('div.by_experience').hide();
  });
  $('#openStore').on( "click", function(e){
    $(this).closest("form").attr("id","open_store_form");
    $('div.by_experience').show();
  });
  if ((navigator.userAgent.match(/(iPod|iPhone|iPad)/))||($(window).width() < 600)){
    $('video').removeAttr("autoplay");
  }

  $('.phone').mask('00000000');
  $('.full_num').mask('00000000000');

  $('.bg').on("scroll touchmove mousewheel", function(e) {
    e.preventDefault();
    e.stopPropagation();
    return false
  });

  $('#header').on('click', '.switch, .close', function() {
    $('#lnb').toggleClass('on');
    if ($('body').css('overflow') == 'hidden'){
      $('body').css('overflow', 'auto');
    }else{
      $('body').css('overflow', 'hidden');
    }
  });
  $('.bg').on( "click", function(e) {
    $('#lnb').toggleClass('on');
    if ($('body').css('overflow') == 'hidden'){
      $('body').css('overflow', 'auto');
    }else{
      $('body').css({
        'overflow': 'hidden',
        'height': '100%'
      });
    }
  });
  // 주소, 연락처 복수개 추가하기
  $(document).on("click", '.append_contact', function(e){
    var append_div = $(e.target).closest('.append_wrap');
    var appended_input = '\
        <div class="row control_wrap" style="margin-bottom: 15px">\
          <div class="input_wrap no_d grid_11">\
            <select class="" name="loc_num">\
              <option selected disabled hidden>선택해주세요</option>\
              <option value="010">010</option>\
              <option value="02">02</option>\
              <option value="031">031</option>\
              <option value="032">032</option>\
              <option value="033">033</option>\
              <option value="041">041</option>\
              <option value="042">042</option>\
              <option value="043">043</option>\
              <option value="044">044</option>\
              <option value="051">051</option>\
              <option value="052">052</option>\
              <option value="053">053</option>\
              <option value="054">054</option>\
              <option value="055">055</option>\
              <option value="061">061</option>\
              <option value="062">062</option>\
              <option value="063">063</option>\
              <option value="064">064</option>\
            </select>\
            <input type="text" name="contact" id="manager_phone" class="phone">\
          </div>\
          <div class="control grid_1">\
            <img class="delete_contact" src="/asset/img/icon/ic-delete.png" alt="">\
          </div>\
        </div>\
      ';
    append_div.append(appended_input);
    $('.phone').mask('00000000');
    if (append_div.children('.row').length === 3){
      $(e.target).hide();
    }
  });

  $(document).on("click", '.delete_contact', function(e){
    $(e.target).closest('.append_wrap').find('.append_contact').show();
    $(e.target).closest('.row').remove();
  });

  $(document).on('click', '.append_location', function(e){
    var append_div = $(e.target).closest('.append_wrap');
    var appended_input = '\
        <div class="row control_wrap" style="margin-bottom: 15px;">\
          <div class="input_wrap select_wrap grid_11 search_location_wrap">\
            <input type="text" class="input_basic business_location search_location" name="deliveryLocation">\
            <div class="searchDiv" hidden>\
              <ul class="searchUl">\
              </ul>\
            </div>\
          </div>\
          <div class="control grid_1">\
            <img class="delete_location" src="/asset/img/icon/ic-delete.png" alt="">\
          </div>\
        </div>\
      ';
    append_div.append(appended_input);
    if (append_div.children('.row').length === 5){
      $(e.target).hide();
    };
  });
  $(document).on('click', '.delete_location', function(e){
    $(e.target).closest('.append_wrap').find('.append_location').show();
    $(e.target).closest('.row').remove();
  });

  $(document).on('click', '.append_location_open', function(e){
    var append_div = $(e.target).closest('.append_wrap');
    var appended_input = '\
          <div class="row control_wrap" style="margin-bottom: 15px;">\
            <div class="input_wrap select_wrap grid_11 search_location_wrap">\
              <input type="text" name="deliveryLocation" id="" class="input_basic search_location" placeholder="">\
              <div class="searchDiv" hidden>\
                <ul id="detailUl" class="searchUl">\
                </ul>\
              </div>\
            </div>\
            <div class="control grid_1">\
              <img class="delete_location_open" src="../../asset/img/icon/ic-delete.png" alt="">\
            </div>\
          </div>\
    ';
    append_div.append(appended_input);
    if (append_div.children('.row').length === 2){
      $(e.target).hide();
    };
  });
  $(document).on('click', '.delete_location_open', function(e){
    $(e.target).closest('.append_wrap').find('.append_location_open').show();
    $(e.target).closest('.row').remove();
  });
  $(document).on('click', '.append_time', function(e){
    var append_div = $(e.target).closest('.append_wrap');
    var appended_input = '\
          <div class="row control_wrap" style="margin-bottom: 15px;">\
            <div class="input_wrap select_wrap grid_11">\
              <select name="availableTime" class="time">\
                <option value="9:30~10:30">9:30~10:30</option>\
                <option value="10:30~11:30">10:30~11:30</option>\
                <option value="11:30~12:30">11:30~12:30</option>\
                <option value="12:30~13:30">12:30~13:30</option>\
                <option value="13:30~14:30">13:30~14:30</option>\
                <option value="14:30~15:30">14:30~15:30</option>\
                <option value="15:30~16:30">15:30~16:30</option>\
                <option value="16:30~17:30">16:30~17:30</option>\
                <option value="17:30~18:30">17:30~18:30</option>\
              </select>\
            </div>\
            <div class="control grid_1">\
              <img class="delete_time" src="../../asset/img/icon/ic-delete.png" alt="">\
            </div>\
          </div>\
          ';
    append_div.append(appended_input);
    if (append_div.children('.row').length === 2){
      $(e.target).hide();
    };

  });
  $(document).on('click', '.delete_time', function(e){
    $(e.target).closest('.append_wrap').find('.append_time').show();
    $(e.target).closest('.row').remove();
  });
});
