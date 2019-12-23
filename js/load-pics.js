console.log("ЗАГРУЗКА СКРИПТА");



// ______ UFA _______

console.log("ЗАГРУЗКА СКРИПТА");

async function setBackgroundImage() {
  console.log("_ЗАХОДИМ В ФУНКЦИЮ_");
  let link;

  console.log("__LINK__", link);

  const url = `https://api.unsplash.com/photos/random?query=town,Ufa&client_id=472c15d3b911a4f0c95fa146c48b2b7a5298d38afe5f7fd474e6b6a67e54df21`;
  try {
    let response = await fetch(url);
    let json = await response.json();
    link = await json.urls.small;
  } catch (err) {
    return err;
  }
  console.log("__LINK___after LOAD___", link);

  locationBlock.style.background = `linear-gradient(#5f4e9680, #95537b80), url(${link}) no-repeat`;
  locationBlock.style.backgroundSize = '100% 100%';
}














// ________ PAVEL _______________

// export async function getLinkToImage(description) {

// async function getLinkToImage(description) {
//   const url = `https://api.unsplash.com/photos/random?query=${description}&client_id=658a67d9c97fa7ec1a24960dc7e837177c74d8d70cd84ae216e6619df6f93842`;

//   console.log("__data.urls.regular__", data.urls.regular);
//   console.log("___getLinkToImage(description)___", getLinkToImage(description));

//   try {
//     return await fetch(url).then((res) => res.json()).then((data) => data.urls.regular);
//   } catch (ERROR) {
//     alert(`Failed to load background image, maybe the number of requests exceeded (50 per hour). Try it at the beginning of a new hour. Error code: ${error.message}`);
//   }
//   console.log("URL___", url);
// }