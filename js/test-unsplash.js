console.log("Hello!");


// UFA

let refreshBtn = document.getElementById('refreshBtn');




async function setBackgroundImage() {
  let link;
  const url = `https://api.unsplash.com/photos/random?query=town,Ufa&client_id=472c15d3b911a4f0c95fa146c48b2b7a5298d38afe5f7fd474e6b6a67e54df21`;
  try {
    let response = await fetch(url);
    let json = await response.json();
    link = await json.urls.small;
  } catch (err) {
    return err;
  }
  locationBlock.style.background = `linear-gradient(#5f4e9680, #95537b80), url(${link}) no-repeat`;
  locationBlock.style.backgroundSize = '100% 100%';
}


window.onload = () => {
  setBackgroundImage();
};


refreshBtn.addEventListener('click', setBackgroundImage);