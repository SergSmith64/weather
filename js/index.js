// yandex map
function init() {
    myMap = new ymaps.Map('map', {
      center: [latitude, longitude],
      zoom: 11,
    });
  }
  ymaps.ready(init);