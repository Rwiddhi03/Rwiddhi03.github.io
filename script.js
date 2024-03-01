async function getWeatherData(city) {
  const apiKey = '0b3c2cde4541660c30dae583a729ebef';
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
  const data = await response.json();
  return data;
}

async function updateWeatherDetails(city) {
  const weatherDetails = document.getElementById('weatherDetails');
  const weatherData = await getWeatherData(city);

  weatherDetails.innerHTML = '';

  if (weatherData.cod === '404') 
  {
    weatherDetails.innerHTML = '<p>City not found</p>';
  } 
  else 
  {
    weatherDetails.innerHTML += `<h5 class="card-title">City: ${weatherData.name}</h5>`;
    weatherDetails.innerHTML += `<p class="card-text">Temperature: ${weatherData.main.temp}°K</p>`;
    weatherDetails.innerHTML += `<p class="card-text">Humidity: ${weatherData.main.humidity}%</p>`;
    weatherDetails.innerHTML += `<p class="card-text">Weather: ${weatherData.weather[0].description}</p>`;
    // Add more details as needed
  }
}

const submitButton = document.getElementById('submitButton');
const cityInput = document.getElementById('cityInput');

submitButton.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city !== '') {
    updateWeatherDetails(city);
  }
});

