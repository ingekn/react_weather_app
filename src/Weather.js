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
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      coord: response.data.coord,
    });
  }

  function search() {
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
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
          <button type="button" id="current-button">
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
