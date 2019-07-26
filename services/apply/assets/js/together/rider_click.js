$(function() {
    $(document).on("click", "#add_bottom_address2", function(){
      $("#bottom_address2").show();
      $(this).hide();
    });
    $(document).on("click", "#delete_bottom_address2", function(){
      $("#bottom_address2 input").val("");
      $("#add_bottom_address2").show();
      $("#bottom_address2").hide();
    });
    $(document).on("click", "#add_top_address2", function(){
      $("#top_address2").show();
      $(this).hide();
    });
    $(document).on("click", "#delete_top_address2", function(){
      $("#top_address2 input").val("");
      $("#add_top_address2").show();
      $("#top_address2").hide();
    });
})
