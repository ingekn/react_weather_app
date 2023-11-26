import React from "react";
import { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function displayWeather(response) {
    setWeatherData({
      loaded: true,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      description: response.data.condition.description,
      coord: response.data.coordinates,
    });
  }

  function search() {
    let apiKey = "1386aafaa966aa68e4520o87btc31531";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function searchLocation(position) {
    console.log(position);
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    const apiKey = "1386aafaa966aa68e4520o87btc31531";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
  }
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            className="search-bar"
            type="search"
            id="city-input"
            placeholder="Search for another city..."
            autoComplete="off"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="btn btn-warning" />
          <button
            type="button"
            id="current-button"
            onClick={getCurrentLocation}
          >
            My location
          </button>
        </form>
        <hr />
        <WeatherInfo data={weatherData} />
        <hr />
        <Forecast coord={weatherData.coord} day={weatherData.date.getDay()} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
