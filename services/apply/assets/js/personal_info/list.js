$(document).ready( function () {
  var apiDomain = hpGlobal.backoffice_domain
  var page = $('.table-responsive').attr('page')

  $.ajax({
    type: 'GET',
    url: apiDomain + '/api/v1/ps-info-policy?per_page=10&cur_page=' + page,
    data: '{}',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function (data) {
      // 목록 출력
      var trHTML = ''
      $.each(data.docs, function (index, value) {
        trHTML += '<tr style="text-overflow:ellipsis; overflow:hidden; white-space:nowrap">' +
          '<td>' + (value.no + 1) + '</td>' +
          '<td><a href=/info/personal/' + value.no + '>' + value.title + '</a></td>' +
          '<td>' + value.create_dt + '</td>' +
          '</tr>'
      })
      var pgHTML = ''
      pgHTML += '<li class="page-item"><a class="page-link pre" onclick="pagination(' + -1 + '); return false;">' + '<' + '</a></li>'
      for (let i = 1; i <= data.pages; i++) {
        pgHTML += '<li class="page-item"><a class="page-link" id=' + i + ' onclick="pagination(' + i + '); return false;">' + i + '</a></li>'
      }
      pgHTML += '<li class="page-item"><a class="page-link next" id=' + data.pages + ' onclick="pagination(' + 0 + '); return false;">' + '>' + '</a></li>'
      $('.page-item').after(pgHTML)
      $('tbody').append(trHTML)

      $('.page-link').css('color', 'black').attr('name', '')
      $('#' + page).css('color', 'white').css('background-color', 'black').attr('name', 'cur')
    },
    error: function (data) {
      alert('리스트 불러오기 실패')
    }
  })
})

