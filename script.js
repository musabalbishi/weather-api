const getWeatherBtn = document.getElementById("weather-btn");
const search = document.getElementById("search-city");
const cityName = document.querySelector(".city");
const feel = document.querySelector(".feels-like");
const temp = document.querySelector(".tempreture");
const max_temp = document.querySelector(".max-temp");
const min_temp = document.querySelector(".min-temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const visibility = document.querySelector(".visibility");
const weatherIcon = document.querySelector(".weather-icon");
const weatherCard = document.querySelector(".card-display");
const error = document.querySelector(".errorMsg");
const desc = document.querySelector(".desc");
//
const apiKey = "837d7709853d7ea4af7694c9667e89e9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const getWeather = async (city) => {
  const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

  if (response.status === 404) {
    error.style.display = "block";
    weatherCard.style.display = "none";
    return;
  }
  if (response.status === 400) {
    error.style.display = "block";
    weatherCard.style.display = "none";
    return;
  }
  let data = await response.json();
  console.log(data);

  //
  cityName.innerHTML = data.name;
  temp.innerHTML = `${data.main.temp} &degC`;
  feel.innerHTML = data.main.feels_like;
  max_temp.innerHTML = data.main.temp_max;
  min_temp.innerHTML = data.main.temp_min;
  humidity.innerHTML = data.main.humidity;
  wind.innerHTML = data.wind.speed;
  visibility.innerHTML = data.visibility;
  desc.innerHTML = data.weather[0].description;
  weatherIcon.src = getWeatherIcon(data.weather[0].main);

  //

  weatherCard.style.display = "block";
  error.style.display = "none";
};

const getWeatherIcon = (weatherDesc) => {
  if (weatherDesc === "Clear") {
    return "./img/icons/clear.png";
  } else if (weatherDesc === "Clouds") {
    return "./img/icons/brokenCloiuds.png";
  } else if (weatherDesc === "Rain") {
    return "./img/icons/Rain.png";
  } else if (weatherDesc === "Mist") {
    return "./img/icons/Mist.png";
  } else if (weatherDesc === "Drizzle") {
    return "./img/icons/Drizzle.png";
  } else if (weatherDesc === "broken clouds") {
    return "./img/icons/brokenCloiuds.png";
  } else {
    return "./img/icons/brokenCloiuds.png";
  }
};
getWeatherBtn.addEventListener("click", () => {
  getWeather(search.value);
});
