// ## Scenario 1 — Weather Dashboard with Error Handling

// Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).

// ### Requirements

// - Make the API request asynchronously using `fetch` with `async/await`.
// - Handle API request failures (for example, invalid city name) using `try/catch`.
// - Create and throw custom errors based on weather conditions (e.g., extremely high or low temperature) and handle them appropriately.

// ### Suggested tasks

// - Build a simple UI to input a city name and display the result.
// - Show user-friendly error messages for network errors, invalid input, or API errors.
// - Demonstrate at least one custom thrown error (e.g., `ExtremeTemperatureError`) and handle it in the UI.

async function fetchWeather(city) {
  try {
    let API_key = "2e97f042cd0b4eaca60b0f3755fc263d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    let res = await fetch(url);

    if (!res.ok) {
      let err = await res.json();
      throw new Error(err.message);
    } else {
      let data = await res.json();

      if (data.main.temp < 0) console.log(`Too cold... ${data.main.temp}`);
      else if (data.main.temp > 30) console.log(`Too Hot... ${data.main.temp}`);
      else console.log(`Temp is ${data.main.temp}`);
    }
  } catch (error) {
    console.log(error);
  }
}

// let input= prompt("Enter city name");
// console.log(input);

// fetchWeather(input.trim());



