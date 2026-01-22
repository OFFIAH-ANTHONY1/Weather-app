/*const apiKey = "8e059ce5fa981320d0932ae9a0d95569";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=8e059ce5fa981320d0932ae9a0d95569units=metric&q=canada";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
}

checkWeather();*/

const apiKey = "8e059ce5fa981320d0932ae9a0d95569";

const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
let weatherIcon = document.querySelector(".weather-icon");
//console.log(api);

async function checkWeather(city) {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(api);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    let cityName = document.getElementById("city");
    let temp = document.getElementById("temp");
    let humidity = document.getElementById("humidity");
    let wind = document.getElementById("wind");

    cityName.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/cloud.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/sun.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/heavy-rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
