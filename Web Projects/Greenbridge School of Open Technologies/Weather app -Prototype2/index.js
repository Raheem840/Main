const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const cardContainer = document.querySelector(".card-container");
const apikey = "a0742192e38592238791d7afb37c4111"; // API Key

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value.trim(); //Gets the city name from the input box and removes extra spaces.

  if (city) {
    try {
      cardContainer.innerHTML = ""; // Clear previous cards
      const weatherData = await getweatherData(city);
      const forecastData = await getForecastData(city);

      displayWeatherInfo(weatherData, "Today");
      displayWeatherInfo(forecastData[0], "Tomorrow");
      displayWeatherInfo(forecastData[1], "Day After Tomorrow");
      
    } catch (error) {
      console.error(error);
      displayError("Could not fetch weather data.");
    }
  } else {
    displayError("Please enter a city.");
  }
});

async function getweatherData(city) {
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  const response = await fetch(apiurl); //get data from the API.
  console.log(response);

  if (!response.ok) throw new Error("Could not fetch weather data."); //If the API response is bad, it throws an error.
  return await response.json();
}

async function getForecastData(city) {
  const apiurl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;
  const response = await fetch(apiurl);
  if (!response.ok) throw new Error("Could not fetch forecast data.");
  const data = await response.json();

  const forecastDays = {};
  for (let entry of data.list) {
    const date = entry.dt_txt.split(" ")[0];
    if (!forecastDays[date] && Object.keys(forecastDays).length < 2) {
      forecastDays[date] = entry;
    }
  }
  return Object.values(forecastDays);
}

function displayWeatherInfo(data, label) {
  const {
    name: city = "",
    main: { temp, humidity, pressure },
    wind: { speed: windSpeed },
    weather: [{ description, id }],
  } = data;

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
                <h2>${label}</h2>
                <h1>${city}</h1>
                <p>Temperature: ${(temp - 273.16).toFixed(1)}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>🎈 Pressure: ${pressure} hPa</p>
                <p>🌀 Wind Speed: ${windSpeed} m/s</p><br>
                <p>${description}</p>
                <p>${getweatherEmoji(id)}</p>
            `;

  cardContainer.appendChild(card);
}

function getweatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300://Thunderstorm
      return "🌩️";
    case weatherId >= 300 && weatherId < 400://Rain
      return "🌧️";
    case weatherId >= 500 && weatherId < 600://Light rain
      return "☔";
    case weatherId >= 600 && weatherId < 700://snow
      return "❄️";
    case weatherId >= 700 && weatherId < 800://Fog
      return "🌫️";
    case weatherId === 800://clear sky
      return "☀️";
    case weatherId >= 801 && weatherId < 810://clouds
      return "☁️";
    default:
      return "❓";
  }
}

function displayError(message) {
  cardContainer.innerHTML = `<div class="card error"><p>${message}</p></div>`;
}
