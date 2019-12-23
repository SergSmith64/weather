// ____ ДЕЛАЮ МАССИВ ИЗ ИКОНОК _______

// myImages - массив
// var myImages = [].slice.call( document.images, 0 );
 
// путь к первой картинке
// myImages[0].src = ...
 
// обойдем все картинки
// myImages.forEach(...)
 
// добавим новую картинку в массив
// myImages.push( new Image );



// console.log("НАЧИНАЕМ!!!");

// создание пустого ассоциативного массива
// var arr1 = new Map();
  
// создание ассоциативного массива и добавление в него пары "ключ-значение"
// var arr222 = new Map([
//   ['key1', 'value1'],
//   ['key2', 'value2'],
//   ['key3', 'value3'],
//   ['key4', 'value4'],
//   ['key5', 'value5']
// ]);

// Узнать количество элементов в массиве можно осуществить с помощью свойства size:
// arr222.size; // 5

// console.log("_этот_массив_ТИПА___", typeof(arr222) );

// console.log("__количество___=__", arr222.size);

var proxyUrl  = 'https://cors-anywhere.herokuapp.com/';

console.log('Далее--задаю координаты и плюсую их со строкой__!');

// Такасаки, Гумма, Япония
var weaLat = 36.3007;
var weaLon = 138.9992;
var strWeather;

console.log('__weaLat__=__' +  weaLat);
console.log('__weaLon__=__' +  weaLon);

var targetUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + weaLat + '&lon=' + weaLon  + '&appid=084a72f7662b746a323538af696e70cb';

// var targetUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=51.5265&lon=46.0435&appid=084a72f7662b746a323538af696e70cb'

fetch(proxyUrl + targetUrl)
  .then(function (rest) { return rest.json() })
  .then(function (data) {
    console.log(data);
    
    strWeather = data.list[0].weather[0].description;

    console.log('Получил_данные_о_ПОГОДЕ:__' + strWeather);

    document.querySelector('.temp-today__weather-description').innerHTML = data.list[0].weather[0].description;
  })
  .catch(function() {
    console.log("Fetch Error = ...........");
  });

  console.log('Получил_данные_о_ПОГОДЕ:__ВНЕ_ФЕТЧА__' + strWeather);



  

// cloud.png
// cloude_&_wind.png
// cloud_&_moon.png
// dir.txt
// parasol.png
// rain.png
// rain_&_snow.png
// rain_&_storm.png
// rain_big.png
// rain_litlle.png
// rain_small.png
// snow.png
// sun.png
// sun_&_cloud.png
// temperature.png
// wind.png

// Weather:

// id: 800, main: "Clear", description: "clear sky", icon: "01n"

// id: 802, main: "Clouds", description: "scattered clouds", icon: "03n"

// id: 803, main: "Clouds", description: "broken clouds", icon: "04n"

// id: 804, main: "Clouds", description: "overcast clouds", icon: "04n"

// id: 500, main: "Rain", description: "light rain", icon: "10n"

// id: 502, main: "Rain", description: "heavy intensity rain", icon: "10d"

// id: 600, main: "Snow", description: "light snow", icon: "13d"