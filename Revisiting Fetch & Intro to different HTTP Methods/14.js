const weatherForm = document.getElementById('weatherForm');
const cityInput = document.getElementById('city');
const weatherDisplay = document.getElementById('weather');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    weatherDisplay.textContent = "Please enter a city name.";
  }
});

async function fetchWeather(city) {
  const apiKey = "YOUR_API_KEY"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      const temp = data.main.temp;
      const description = data.weather[0].description;
      weatherDisplay.innerHTML = `<h3>Weather in ${city}</h3>
                                  <p>Temperature: ${temp}°C</p>
                                  <p>Condition: ${description}</p>`;
    } else {
      throw new Error(data.message || "City not found.");
    }
  } catch (error) {
    weatherDisplay.textContent = `Error: ${error.message}`;
  }
}
