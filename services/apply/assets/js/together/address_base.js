$(function() {
  $(document).on("click", ".searchLi", function(){
    $(this).closest('.search_location_wrap').find('input').val($(this).text());
  });
  $(document).click(function(){
    $('.searchDiv').hide();
  });
})
