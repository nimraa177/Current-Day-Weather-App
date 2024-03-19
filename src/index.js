function refreshWeather(response) {
  //temperature data
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  //city data
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  //description data
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  //Humidity Data
  let humidityElement = document.querySelector("#Humidity-value");
  humidityElement.innerHTML = response.data.temperature.humidity;
  //Wind data
  let windElement = document.querySelector("#Wind-value");
  windElement.innerHTML = response.data.wind.speed;
  //Time
  let timeElement = document.querySelector("#current-date");
  //Parsing the date Sun Mar 17 2024 23:01:02 GMT-0500
  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = response.data.time;
  timeElement.innerHTML = formatDate(date);

  console.log(response.data);
}
//Function to format date
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "0c309aff29364454354a4b94ab9ot995";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(refreshWeather); //get the data and call function
}

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
searchCity("Islamabad");
