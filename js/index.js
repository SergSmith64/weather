console.log("получаю погоду с OpenWeatherMap");

// ___ ОТКУДА ВЗЯЛСЯ ПРОКСИ ?!!! ____
// https://overcoder.net/q/4021/попытка-использовать-fetch-и-перейти-в-режим-no-cors

var proxyUrl  = 'https://cors-anywhere.herokuapp.com/';

// fetch('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=084a72f7662b746a323538af696e70cb', { mode: 'no-cors'})

// var targetUrl = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=084a72f7662b746a323538af696e70cb';


// ______________________________________________________ ЗДЕСЬ _____51.5265_____46.0435_____ ЭТО САРАТОВ _____________
// var targetUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=51.5265&lon=46.0435&appid=084a72f7662b746a323538af696e70cb';

// fetch(proxyUrl + targetUrl)
//   .then(function (rest) { return rest.json() })
//   .then(function (data) {
//     console.log(data);
//     document.querySelector('.geo__city').textContent = data.name;
//     document.querySelector('.geo__country').textContent = data.sys.country;
//     document.querySelector('.geo__date').innerHTML = data.dt_txt;
//     document.querySelector('.temp-today__temp').innerHTML = Math.round(data.main.temp - 263) + '&deg';
//   })
//   .catch(function() {
//     console.log("Fetch Error = ...........");
//   });

// ==============================================================================================

//____ ОКРУГЛЕНИЕ до 4 знаков после запятой ______
// console.log(+ 54.77906545555553.toFixed(4));     //  ПОЛУЧАЕТСЯ --> 54.7790



// --------- АССОЦИАТИВНЫЕ МАССИВЫ ----------


const picName = {
  'cloud':         './assets/img/weather/cloud.png',
   'cloude_&_wind': './assets/img/weather/cloude_&_wind.png',
   'cloud_&_moon':  './assets/img/weather/cloud_&_moon.png',
   'parasol':       './assets/img/weather/parasol.png',
   'rain':          './assets/img/weather/rain.png',
   'rain_&_snow':   './assets/img/weather/rain_&_snow.png',
   'rain_&_storm':  './assets/img/weather/rain_&_storm.png',
   'rain_big':      './assets/img/weather/rain_big.png',
   'rain_litlle':   './assets/img/weather/rain_litlle.png',
   'rain_small':    './assets/img/weather/rain_small.png',
   'snow':          './assets/img/weather/snow.png',
   'sun':           './assets/img/weather/sun.png',
   'sun_&_cloud':   './assets/img/weather/sun_&_cloud.png',
   'wind':          './assets/img/weather/wind.png'
};



//  _________________ ОПРЕДЕЛЯЮ МОИ КООРДИНАТЫ __________toFixed(4)________
var detectLatitude = 0;
var detectLongitude = 0;

function getCoordinat() {
    // navigator.geolocation.getCurrentPosition(showCoordinat, showError);
    navigator.geolocation.getCurrentPosition(showCoordinat);
}
function showCoordinat(position) {
    console.log("МОЯ Широта:____" + position.coords.latitude);
    console.log("МОЯ Долгота:___" + position.coords.longitude);

    detectLatitude = position.coords.latitude;
    detectLatitude = detectLatitude.toFixed(4);
    detectLongitude = position.coords.longitude;
    detectLongitude = detectLongitude.toFixed(4);
    console.log("ПРИСВОЕННЫЕ КООР-Ы___", detectLatitude, "___", detectLongitude);


    var targetUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=084a72f7662b746a323538af696e70cb';

    fetch(proxyUrl + targetUrl)
    .then(function (rest) { return rest.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.geo__city').textContent = data.city.name;
        document.querySelector('.geo__country').textContent = data.city.country;
        document.querySelector('.geo__date').textContent = data.list[0]['clouds']['dt_txt'];
        document.querySelector('.temp-today__temp').innerHTML = Math.round(data.list[0].main.temp - 273) + '&deg';
        document.querySelector('.temp-today__weather-description').innerHTML = data.list[0].weather[0].description;
        document.querySelector('.temp-today__weather-feels').innerHTML = Math.round(data.list[0].main.feels_like - 273) + '&deg';
        document.querySelector('.temp-today__weather-wind').innerHTML = data.list[0].wind.speed;
        document.querySelector('.temp-today__weather-humidity').innerHTML = data.list[0].main.humidity;
        document.querySelector('.temp-today__weather-pressure').innerHTML = data.list[0].main.pressure;
        document.querySelector('.geo-point__latitude').innerHTML = data.city.coord.lat;
        document.querySelector('.geo-point__longitude').innerHTML = data.city.coord.lon;
        document.querySelector('.temp-day-2__temp').innerHTML = Math.round(data.list[8].main.temp - 273) + '&deg';
        document.querySelector('.temp-day-2__weather-description').innerHTML = data.list[8].weather[0].description;
        document.querySelector('.temp-day-3__temp').innerHTML = Math.round(data.list[16].main.temp - 273) + '&deg';
        document.querySelector('.temp-day-3__weather-description').innerHTML = data.list[16].weather[0].description;
        document.querySelector('.temp-day-4__temp').innerHTML = Math.round(data.list[24].main.temp - 273) + '&deg';
        document.querySelector('.temp-day-4__weather-description').innerHTML = data.list[24].weather[0].description;
    
    //   strWeather = data.list[0].weather[0].description;
    //   console.log('Получил_данные_о_ПОГОДЕ:__' + strWeather);
    })


    .catch(function showError(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          alert("Пользователь запретил считывать информацию о своем местоположении!");
        break;

        case error.POSITION_UNAVAILABLE:
          alert("Браузер не смог определить местоположение пользователя");
        break;

        case error.TIMEOUT:
          alert("Браузер не успел определить местоположение за выделенное ему время");
        break;

        case error.UNKNOWN_ERROR:
          alert("Произошла неопределенная ошибка");
        break;
    }
    });
}
// ____ ВЫВОД КООРДИНАТ ____
getCoordinat();
console.log('___здесь__ШИРОТА__' + detectLatitude);
console.log('___здесь__ДОЛГОТА__' + detectLongitude);




// __________ ВВОД НАЗВАНИЯ ГОРОДА ПО АНГЛИЙСКИ __________dt_txt___list[0].dt_txt___

function inputYourCity() {
    var town = document.getElementById("yourCity");
    console.log("ВНУТРИ ФУНКЦИИ ВИЖУ ГОРОД :___", (town.value));
  
    // var proxyUrl  = 'https://cors-anywhere.herokuapp.com/';
  
    var targetUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + town.value + '&appid=084a72f7662b746a323538af696e70cb';
  
    fetch(proxyUrl + targetUrl)
    .then(function (rest) { return rest.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.geo__city').textContent = data.city.name;
        document.querySelector('.geo__country').textContent = data.city.country;
        document.querySelector('.geo__date').innerHTML = data.list[0].dt_txt;
        document.querySelector('.temp-today__temp').innerHTML = Math.round(data.list[0].main.temp - 273) + '&deg';
        document.querySelector('.temp-today__weather-description').innerHTML = data.list[0].weather[0].description;
        document.querySelector('.temp-today__weather-feels').innerHTML = Math.round(data.list[0].main.feels_like - 273) + '&deg';
        document.querySelector('.temp-today__weather-wind').innerHTML = data.list[0].wind.speed;
        document.querySelector('.temp-today__weather-humidity').innerHTML = data.list[0].main.humidity;
        document.querySelector('.temp-today__weather-pressure').innerHTML = data.list[0].main.pressure;
        document.querySelector('.geo-point__latitude').textContent = data.city.coord.lat;

        document.querySelector('.geo-point__longitude').innerHTML = data.city.coord.lon;
        document.querySelector('.temp-day-2__temp').innerHTML = Math.round(data.list[8].main.temp - 273) + '&deg';
        document.querySelector('.temp-day-2__weather-description').innerHTML = data.list[8].weather[0].description;
        document.querySelector('.temp-day-3__temp').innerHTML = Math.round(data.list[16].main.temp - 273) + '&deg';
        document.querySelector('.temp-day-3__weather-description').innerHTML = data.list[16].weather[0].description;
        document.querySelector('.temp-day-4__temp').innerHTML = Math.round(data.list[24].main.temp - 273) + '&deg';
        document.querySelector('.temp-day-4__weather-description').innerHTML = data.list[24].weather[0].description;
    })
    .catch(function() {
      console.log("Fetch Error = ...........");
    });
  }


// __ДОБАВЛЯЮ__
let myMap;

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [51.544248, 46.049506],
    zoom: 11
  });
  // __ДОБАВЛЯЮ__
  // getCoordinat().then((lat, lon) => maps.setCenter([51.544248, 46.049506]));
}
