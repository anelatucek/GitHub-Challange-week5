
let dateElement = document.querySelector("#date");
let currentTime = new Date();
let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let day = currentTime.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

console.log(`${currentTime} ${hours}:${minutes}`);
dateElement.innerHTML = `${days[day]} ${hours}:${minutes}`;

// step 2

var searchBar = document.getElementById("searchInput");
searchBar.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("searchCity").click();
  }
});

function search(searchCity) {
  searchCity.preventDefault();
  let searchInput = document.querySelector("#searchInput");
  searchInput.addEventListener("submit", search);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}

let searchButton = document.querySelector("#searchCity");
searchButton.addEventListener("click", search);

// step 3

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 72;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 22;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

