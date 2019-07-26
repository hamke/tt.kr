$(document).ready(function() {
  var apiDomain = hpGlobal.backoffice_domain;

  $.ajax({
    type: 'GET',
    url: apiDomain + '/api/v1/recruit/jobs?per_page=all',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(data){
      var cList = $('.recruit_list');
      $.each(data, function(index, value){
        var li = $('<li/>')
          .addClass('grid_6 team-' + value.team.number)
          .appendTo(cList);
        var a = $('<a/>')
          .attr('href', '/recruit/applicant/'+ value.position)
          .appendTo(li);
        var strong = $('<strong/>')
          .text(value.position)
          .appendTo(a);
        var p = $('<p/>')
          .text(value.team.name)
          .appendTo(a);
      });

    }, error: function(data){
      alert("리스트 불러오기 실패");
    }

  });
  $(".team_tab a").click(function( ){
    $(".team_tab li").removeClass('on');

    $($(this).parent()).addClass('on');

    var openTab = $(this).attr("href").substr(1);

    if (openTab === "team-all") {
      $('.recruit_list .grid_6').show()
    } else {
      $('.recruit_list .grid_6').hide();
      $(".recruit_list .grid_6." + openTab).show();
    }
  })
});
