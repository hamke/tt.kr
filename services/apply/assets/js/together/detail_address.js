$(document).ready(function() {
  var apiDomain = hpGlobal.backoffice_domain;

  var getLocation = function(inputElement) {
    if(inputElement.val().length >= 2){
      $.ajax({
        type: 'get',
        url: apiDomain + "/api/v1/address/detail?keyword="+ inputElement.val(),
        success: function(data){
          var searchDiv = inputElement.closest('div.input_wrap').find('.searchDiv');
          var searchUl = inputElement.closest('div.input_wrap').find('.searchUl');
          var searchLi = searchUl.find('.searchLi');
          searchLi.remove();
          var items = data.items;
          if(items.length !== 0){
            $.each(items, function(i, e) {
              var li = $('<li/>')
                .css('cursor', 'pointer')
                .addClass("searchLi")
                .text(e)
                .appendTo(searchUl);
            });
            searchDiv.show();
          }else{
            searchDiv.hide();
          }
        }
      })
    }
  }

  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();
  $('.detail_address').keyup( function(){
    var element = $(this)
    delay(function(){getLocation(element)}, 200);
  })
});
