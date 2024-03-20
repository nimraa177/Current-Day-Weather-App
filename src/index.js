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
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  //Wind data
  let windElement = document.querySelector("#Wind-value");
  windElement.innerHTML = `${response.data.wind.speed}Km/h`;
  //feel-like data
  let feelsElement = document.querySelector("#Feels-like");
  feelsElement.innerHTML = response.data.temperature.feels_like;
  console.log(response.data);
  //icon chnage
  let icon = document.querySelector("#current-temperature-icon");
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon"/>`;
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
