<!-- Modal: Apply -->
<div class="modal fade" id="link-apply" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"><i class="fas fa-rocket"></i> 신청하기</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-lg-12">
            <form id="applyForm" name="ContactForm" method="post" action="">

              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name">
              </div>
              <div class="form-group">
                <label for="email">Email Address:</label>
                <input type="email" class="form-control" id="email">
              </div>
              <div class="form-group">
                <label for="message">Message:</label>
                <textarea name="message" class="form-control" id="message"></textarea>
              </div>
              <button type="button" id="submit" class="btn btn-danger btn-lg btn-block">확인</button>

            </form>

            <!-- <div class="message_box" style="margin:10px 0px;"></div> -->

          </div>
        </div>
        <div class="message_box" style="margin:10px 0px;"></div>
      </div>
    </div>
  </div>
</div>

<script>
  $(document).ready(function() {
    var delay = 2000;
    $('#submit').click(function(e) {
      e.preventDefault();
      var name = $('#name').val();
      if (name == '') {
        $('.message_box').html(
          '<span style="color:red;">이름을 입력해 주세요</span>'
        );
        $('#name').focus();
        return false;
      }

      var email = $('#email').val();
      if (email == '') {
        $('.message_box').html(
          '<span style="color:red;">이메일 주소를 입력해 주세요</span>'
        );
        $('#email').focus();
        return false;
      }
      if ($("#email").val() != '') {
        if (!isValidEmailAddress($("#email").val())) {
          $('.message_box').html(
            '<span style="color:red;">올바른 이메일 주소를 입력해 주세요</span>'
          );
          $('#email').focus();
          return false;
        }
      }

      var message = $('#message').val();
      if (message == '') {
        $('.message_box').html(
          '<span style="color:red;">메시지를 입력해 주세요</span>'
        );
        $('#message').focus();
        return false;
      }

      $.ajax({
        type: "POST",
        url: "./sendmail.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        beforeSend: function() {
          $('.message_box').html(
            '<center><img src="../assets/img/loading.gif" width="20" height="20"/> 전송 중... 잠시만 기다려 주세요</center>'
          );
        },
        success: function(data) {
          $('.message_box').html(data);
          // $('input[type="text"],input[type="email"],textarea, select').val(''); // 이것도 쓸 수 있음
          $('#applyForm')[0].reset();
          setTimeout(function(){
              $('.message_box').fadeOut();
              $('#link-apply').modal('hide');
              return false;
          }, delay);
        }
      });

    }); // '#submit'

  });
</script>

<script>
  //Email Validation Function
  function isValidEmailAddress(emailAddress) {
    var pattern =
      /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
  };
</script>
