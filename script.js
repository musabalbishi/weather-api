const getWeatherBtn = document.getElementById("weather-btn");

//
const apiKey = "837d7709853d7ea4af7694c9667e89e9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const search = document.getElementById("search-city");

const getWeather = async (city) => {
  const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);

  //
  if (typeof data.name === "undefined") {
    document.querySelector(".city-name").innerHTML = "helloooooo";
    document.querySelector(".city-name").innerHTML = "";
    document.querySelector(".feels-like").innerHTML = "";
    document.querySelector(".max-temp").innerHTML = "";
    document.querySelector(".min-temp").innerHTML = "";
  } else {
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".feels-like").innerHTML = data.main.feels_like;
    document.querySelector(".max-temp").innerHTML = data.main.temp_max;
    document.querySelector(".min-temp").innerHTML = data.main.temp_min;
  }
};

getWeatherBtn.addEventListener("click", () => {
  getWeather(search.value);
});
