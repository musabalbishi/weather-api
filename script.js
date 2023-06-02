const getWeatherBtn = document.getElementById("weather-btn");

//
const apiKey = "837d7709853d7ea4af7694c9667e89e9";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=mecca";

const getWeather = async () => {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
};

getWeatherBtn.addEventListener("click", getWeather);
