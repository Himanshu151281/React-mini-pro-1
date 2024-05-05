import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {

    let [city, setCity] = useState("");

    // Define the API URL and API key for the weather API
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "75d84ee6f6afb35c3c5731d0c0212510";

    // Function to fetch weather information from the API
    let getWeatherInfo = async () => {
        // Make a GET request to the weather API with the city and API key
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        
        // Parse the response as JSON
        let jsonResponse = await response.json();

        // Extract the relevant weather information from the JSON response
        let result = {
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };

        // Log the weather information to the console
        console.log(result);
    };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
  };

  return (
    <div className="SearchBox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
