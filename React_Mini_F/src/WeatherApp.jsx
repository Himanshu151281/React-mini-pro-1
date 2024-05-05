import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

// Define a function called updateInfo that takes in a parameter called newInfo
// This function is responsible for updating the weatherInfo state with the newInfo parameter
let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
}

// Render the WeatherApp component
return (
    <div style={{ textAlign: "center" }}>
        <h2>Weather App by Delta</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo} />
    </div>
);
}
