$(document).ready(function() {

  $("#team_tabs").tabs();
  $(".team_tab li a").click( function(){
    $(".team_tab li").removeClass('on');
    $($(this).parent()).addClass('on')
  });
});
