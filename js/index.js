const latitudeElement = document.getElementById('latitude');
const longitudeElement = document.getElementById('longitude');


let myMap;


async function getLinkToImage(description) {
    const url = `https://api.unsplash.com/photos/random?query=${description}&client_id=658a67d9c97fa7ec1a24960dc7e837177c74d8d70cd84ae216e6619df6f93842`;
  
    try {
      return await fetch(url).then((res) => res.json()).then((data) => data.urls.regular);
    } catch (ERROR) {
      alert(`Failed to load background image, maybe the number of requests exceeded (50 per hour). Try it at the beginning of a new hour. Error code: ${error.message}`);
    }
  }

// load weather information from 'http://api.openweathermap.org/'
async function getWeather(latitude, longitude) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&lang=en&units=metric&APPID=03002feb4716ae6a2619917df860988c`;

  try {
    return await fetch(url).then((res) => res.json()).then((data) => data);
  } catch (ERROR) {
    alert('Failed to load weather information');
  }
}


// ________ПОЛУЧИТЬ ПОГОДУ ПО ИНДЕКСУ _________ НЕОБЯЗАТЕЛЬНО ____
function getWeatherId(id) {
  const idFirstLetter = id.toString().slice(1, 0);
  if (idFirstLetter === 2) {
    return '2xx';
  } if (idFirstLetter === 3) {
    return '3xx';
  }
  return +id;
}



// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
// САРАТОВ ___ 51.544248, 46.049506
// center: [data.city.coord.lat, data.city.coord.lon],
// center: [position.coords.latitude, position.coords.longitude],

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    // center: [51.544248, 46.049506],
    center: [latitude, longitude],
    zoom: 11
  });
}