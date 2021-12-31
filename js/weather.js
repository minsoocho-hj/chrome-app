// c97f834cfb3a81ae3e08b5747cf37011
const API_KEY = "c97f834cfb3a81ae3e08b5747cf37011";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  console.log(lat, long);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;
  fetch(url).then(response => response.json().then((data) => {
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

  }));
}

function onGeoError() {
  console.log("x");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
