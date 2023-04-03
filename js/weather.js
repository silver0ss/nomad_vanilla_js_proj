const weather = document.querySelector("#weather span:first-child");
const temp = document.querySelector("#weather span:last-child");
const API_KEY = "8e383d105f603d973b73cc8dcba7b98e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = `${data.weather[0].main}`;
      temp.innerText = `🌡️${parseInt(data.main.temp, 10)}℃`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
