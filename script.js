const apiKey = "8e059ce5fa981320d0932ae9a0d95569";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=8e059ce5fa981320d0932ae9a0d95569units=metric&q=canada";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
}

checkWeather();
