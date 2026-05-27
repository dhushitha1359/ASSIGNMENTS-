import React, { useState } from "react";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    // Dummy weather data
    setWeather({
      temperature: "32°C",
      condition: "Sunny",
      humidity: "60%",
    });
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
      }}
    >
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginRight: "10px",
        }}
      />

      <button
        onClick={getWeather}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Get Weather
      </button>

      {weather && (
        <div
          style={{
            marginTop: "30px",
            border: "1px solid gray",
            display: "inline-block",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>{city}</h2>
          <p>Temperature: {weather.temperature}</p>
          <p>Condition: {weather.condition}</p>
          <p>Humidity: {weather.humidity}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;