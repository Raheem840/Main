//WEATHER APP
const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apikey = "a0742192e38592238791d7afb37c4111"; //api key got from openweathermap.org


weatherForm.addEventListener("submit",async  event =>{
    event.preventDefault(); // Prevent the default form submission behavior

    const city = cityInput.value; // Get the value of the input field

    if(city){
        try{
            const weatherData = await getweatherData(city);
            displayweatherInfo(weatherData); // Call the function to display weather information

        }
        catch(error){
            console.error(error);
            displayError(error);
        }

    }
    else{
        displayError("Please enter a City");
    }

});

async function getweatherData(city){
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const response = await fetch(apiurl);
    console.log(response);

    if(!response.ok){
        throw new Error("Could not fetch weather data.");
    }
    return await response.json(); // Parse the response as JSON


}

function displayweatherInfo(data){
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data; // Destructure the data object

  card.textContent = "";
  card.style.display = "flex"; // Show the card

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  // Display weather description and emoji
  cityDisplay.textContent = city;
  tempDisplay.textContent = ` ${(temp - 273.16).toFixed(1)}°C`; // Display temperature in Celsius
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getweatherEmoji(id); // Get the emoji based on weather ID

  // Add a class for styling
  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descDisplay.classList.add("descDisplay");
  weatherEmoji.classList.add("weatherEmoji");


  //Appending elements to the card
  card.appendChild(cityDisplay); // Append city display to the card
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji); // Append weather emoji to the card
}

function getweatherEmoji(weatherId){
    switch (true) {
      case weatherId >= 200 && weatherId < 300:
        return "🌩️"; // Thunderstorm
      case weatherId >= 300 && weatherId < 400:
        return "🌧️"; // Rainy cloud
      case weatherId >= 500 && weatherId < 600:
        return "☔"; // Rain
      case weatherId >= 600 && weatherId < 700:
        return "❄️"; // Snow
      case weatherId >= 700 && weatherId < 800:
        return "🌫️"; // Fog
      case (weatherId === 800):
        return "☀️"; // Clear sky
      case (weatherId >= 801 && weatherId < 810):
        return "☁️"; // Clouds
      default:
        return "❓";
    }


}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = ""; // Clear previous content
    card.style.display = "flex";    // Show the card
    card.appendChild(errorDisplay); // Append the error message to the card

}