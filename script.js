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
  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(".feels-like").innerHTML = data.main.feels_like;
};

getWeatherBtn.addEventListener("click", () => {
  getWeather(search.value);
});
