//se supone que con esto, yo importo la clase Weather del documento Weather.js
const { Weather } = require("./Weather");
const { UI } = require("./UI");
const { Store } = require("./Store");

//nuevo objeto de la clase Weather
const store = new Store();
const { city, countryCode } = store.getLocationData();
const weather = new Weather(city, countryCode);
const ui = new UI();

require("./index.css");

async function fetchWeather() {
  const data = await weather.getWeather();
  ui.render(data);
  console.log(data);
}

document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const countryCode = document.getElementById("countryCode").value;
  weather.changeLocation(city, countryCode);
  store.setLocationData(city, countryCode);
  fetchWeather();
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", fetchWeather);
