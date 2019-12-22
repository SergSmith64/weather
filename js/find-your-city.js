// _______ РАБОТАЕТ _______

function inputYourCity() {
  var town = document.getElementById("yourCity");
  console.log("ВНУТРИ ФУНКЦИИ ВИЖУ___", (town.value));

  var proxyUrl  = 'https://cors-anywhere.herokuapp.com/';

  var targetUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + town.value + '&appid=084a72f7662b746a323538af696e70cb';

  fetch(proxyUrl + targetUrl)
  .then(function (rest) { return rest.json() })
  .then(function (data) {
    console.log(data);
    document.querySelector('.geo__city').textContent = data.city.name;
    document.querySelector('.geo__country').textContent = data.city.country;
    document.querySelector('.geo__date').textContent = data.list[0]['clouds']['dt_txt'];
    document.querySelector('.temp-today__temp').innerHTML = Math.round(data.list[0].main.temp - 273) + '&deg';
    document.querySelector('.temp-today__weather-description').innerHTML = data.list[0].weather[0].description;

    document.querySelector('.geo-point__latitude').innerHTML = data.city.coord.lat;
    document.querySelector('.geo-point__longitude').innerHTML = data.city.coord.lon;
    
    strWeather = data.list[0].weather[0].description;

    console.log('Получил_данные_о_ПОГОДЕ:__' + strWeather);

    document.querySelector('.temp-today__weather-description').innerHTML = data.list[0].weather[0].description;
  })
  .catch(function() {
    console.log("Fetch Error = ...........");
  });
}