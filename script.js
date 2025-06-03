const apikey = "7ba46804d2fd152a5447d837d505d9d3"; 

// Define the fetchWeather function first
function fetchWeather() {
  const city = document.getElementById("city").value;
  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  // Correct the fetch URL using backticks and the correct variable name (apikey)
  fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric')
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = '
          <p><strong>${data.name}, ${data.sys.country}</strong></p>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Condition: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        ';
      } else {
        alert("City not found");
      }
    })
    .catch(error => console.error("Error fetching data:", error));
}

// Add event listener to the "Get Weather" button
document.getElementById("getWeather").addEventListener("click", fetchWeather);

// Add event listener to the "city" input for pressing Enter
document.getElementById("city").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    fetchWeather(); // Call the function when Enter is pressed
  }
});
