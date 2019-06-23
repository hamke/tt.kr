$(document).ready(function() {
  var apiDomain = hpGlobal.backoffice_domain;

  $.ajax({
    type: 'GET',
    url: apiDomain + "/api/v1/publicity?per_page=100&cur_page=1",
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(data){
      var cList = $('.news_list');
      $.each(data.publicities.docs, function(index, value){
        var li = $('<li/>')
          .appendTo(cList);
        var a = $('<a/>')
          .attr('href', value.link)
          .attr('target', '_blank')
          .appendTo(li);
        var h3 = $('<h3/>')
          .text(value.title)
          .appendTo(a);
        var p = $('<p/>')
          .text(value.contents)
          .appendTo(a);
        var div = $('<div/>')
          .addClass('origin_wrap')
          .appendTo(li);
        var span = $('<span/>')
          .text(value.date)
          .appendTo(div);
        var span = $('<strong/>')
          .text(value.newsCompany)
          .appendTo(div)
      });
    }, error: function(data){
      alert("리스트 불러오기 실패");
    }
  });
});
