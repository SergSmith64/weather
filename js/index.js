

export async function getLinkToImage(description) {
    const url = `https://api.unsplash.com/photos/random?query=${description}&client_id=658a67d9c97fa7ec1a24960dc7e837177c74d8d70cd84ae216e6619df6f93842`;
  
    try {
      return await fetch(url).then((res) => res.json()).then((data) => data.urls.regular);
    } catch (ERROR) {
      alert(`Failed to load background image, maybe the number of requests exceeded (50 per hour). Try it at the beginning of a new hour. Error code: ${error.message}`);
    }
  }


// yandex map
function init() {
    myMap = new ymaps.Map('map', {
    //   center: [latitude, longitude],
      center: [56.05, 45.59],
      zoom: 11,
    });
  }
  ymaps.ready(init);