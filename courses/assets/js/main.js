$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            // $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        // $('#back-to-top').tooltip('show');

        // make classes named "old" 0.5 opacity
        var old = document.getElementsByClassName("old");
        var i;
        for (i = 0; i < old.length; i++) {
          old[i].style.opacity = "0.5";
        };

});
