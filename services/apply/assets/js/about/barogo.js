$(document).ready(function() {
  var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
      center: new daum.maps.LatLng(37.503973, 127.040425),
      level: 3 // 지도의 확대 레벨
    };

  var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

  // 마커가 표시될 위치입니다
  var markerPosition  = new daum.maps.LatLng(37.503973, 127.040425);
  var markerImage = new daum.maps.MarkerImage(
    "/asset/img/icon/icon_map_point.png",
    new daum.maps.Size(36, 36)
  );
  var iwContent = '<div style="padding:2px; width:200px">서울 강남구 테헤란로37길 26</div>';
  var iwPosition = new daum.maps.LatLng(37.504293, 127.040400);

  // 마커 생성
  var marker = new daum.maps.Marker({
    position: markerPosition,
    image: markerImage
  });
  zoom = new daum.maps.ZoomControl();
  map.addControl(zoom, daum.maps.ControlPosition.LEFT);
  map.setZoomable(false); // 확대 축소 끄기
  map.setDraggable(true);
  marker.setMap(map);

  // 인포 윈도우 생성
  var infowindow = new daum.maps.InfoWindow({
    map: map, // 인포윈도우가 표시될 지도
    position : iwPosition, 
    content : iwContent,
  });
})
