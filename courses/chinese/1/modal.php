<!-- <a class="" data-toggle="modal" data-target="#link-apply" href=""> -->

<!-- Modal: Apply -->
<div class="modal fade" id="link-apply" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content container">
      <div class="modal-header">
        <h5 class="modal-title"><i class="fas fa-rocket"></i> 신청하기</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-lg-12">

            <form id="applyForm" method="post" action="">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="name">*담당자 성명</label>
                  <input type="text" id="name" class="form-control" placeholder="담당자명을 입력해 주세요" required >
                </div>
                <div class="form-group col-md-6">
                  <label for="company">회사명 (선택)</label>
                  <input type="text" id="company" class="form-control" placeholder="회사명을 입력해 주세요">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="phone">*전화 번호</label>
                  <input type="phone" id="phone" class="form-control" placeholder="전화 번호를 입력해 주세요" required >
                </div>
                <div class="form-group col-md-6">
                  <label for="email">*이메일</label>
                  <input type="email" id="email" class="form-control" placeholder="이메일 주소를 입력해 주세요" required >
                </div>
              </div>
              <div class="form-row">

                <div class="form-group col-md-12">
                  <label>*신청 서비스 (복수 선택 가능)</label>
                </div>

                <div class="form-group col-md-4">
                  <div class="form-check">
                    <input type="checkbox" id="purpose-01" name="purpose" class="form-check-input" value="서비스 등록 요청">
                    <label for="purpose-01">서비스 등록 요청</label>
                  </div>
                </div>
                <div class="form-group col-md-4">
                  <div class="form-check">
                    <input type="checkbox" id="purpose-02" name="purpose" class="form-check-input" value="웹사이트 제작">
                    <label for="purpose-02">웹사이트 제작</label>
                  </div>
                </div>
                <div class="form-group col-md-4">
                  <div class="form-check">
                    <input type="checkbox" id="purpose-03" name="purpose" class="form-check-input" value="위챗 공중 계정 개설">
                    <label for="purpose-03">위챗 공중 계정 개설</label>
                  </div>
                </div>
                <div class="form-group col-md-4">
                  <div class="form-check">
                    <input type="checkbox" id="purpose-04" name="purpose" class="form-check-input" value="기업용 도메인/이메일">
                    <label for="purpose-04">기업용 도메인/이메일</label>
                  </div>
                </div>
                <div class="form-group col-md-4">
                  <div class="form-check">
                    <input type="checkbox" id="purpose-05" name="purpose" class="form-check-input" value="온라인 마케팅 대행">
                    <label for="purpose-05">온라인 마케팅 대행</label>
                  </div>
                </div>
                <div class="form-group col-md-4">
                  <div class="form-check">
                    <input type="checkbox" id="purpose-06" name="purpose" class="form-check-input" value="기타">
                    <label for="purpose-06">기타</label>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="message">신청 내용 및 메시지 (선택)</label>
                  <textarea id="message" class="form-control" rows="2" placeholder="내용을 입력해 주세요"></textarea>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="promocode">프로모션 코드 (선택)</label>
                  <input type="text" id="promocode" class="form-control" placeholder="프로모션 코드를 입력해 주세요">
                </div>
              </div>

              <div class="row pt-3">
                <div class="col-md-4">
                </div>
                <div class="col-md-4">
                  <button type="button" id="submit" class="btn btn-dark btn-lg btn-block">확인</button>
                </div>
                <div class="col-md-4">
                </div>
              </div>

            </form>

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
          '<center><span style="color:red;">이름을 입력해 주세요</span></center>'
        );
        $('#name').focus();
        return false;
      }

      var company = $('#company').val();
      if (company == '') {
        $('.message_box').html(
          '<center><span style="color:red;">회사명을 입력해 주세요</span></center>'
        );
        $('#company').focus();
        return false;
      }

      var phone = $('#phone').val();
      if (phone == '') {
        $('.message_box').html(
          '<center><span style="color:red;">전화번호를 입력해 주세요</span></center>'
        );
        $('#phone').focus();
        return false;
      }

      var email = $('#email').val();
      if (email == '') {
        $('.message_box').html(
          '<center><span style="color:red;">이메일 주소를 입력해 주세요</span></center>'
        );
        $('#email').focus();
        return false;
      }
      if ($("#email").val() != '') {
        if (!isValidEmailAddress($("#email").val())) {
          $('.message_box').html(
            '<center><span style="color:red;">올바른 이메일 주소를 입력해 주세요</span></center>'
          );
          $('#email').focus();
          return false;
        }
      }

      var purpose = new Array();
        $("input:checked").each(function() {
           purpose.push($(this).val());
        });
      if (purpose == '') {
        $('.message_box').html(
          '<center><span style="color:red;">신청 서비스를 선택해 주세요</span></center>'
        );
        $('#purpose-01').focus();
        return false;
      }

      var message = $('#message').val();

      var promocode = $('#promocode').val();

      $.ajax({
        type: "POST",
        url: "./sendmail.php",
        data: "name=" + name + "&company=" + company + "&phone=" + phone + "&email=" + email + "&purpose=" + purpose + "&message=" + message + "&promocode=" + promocode,
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
