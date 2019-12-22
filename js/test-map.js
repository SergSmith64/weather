console.log("ТЕСТ-МЭП");


ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [51.544248, 46.049506],
    zoom: 11
  });
  // __ДОБАВЛЯЮ__
  // getCoordinat().then((lat, lon) => maps.setCenter([51.544248, 46.049506]));
}


