import React from "react";
import { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("Paris");
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="search"
          id="city-input"
          placeholder="Search for another city..."
          autocomplete="off"
          onChange={updateCity}
        />
        <input type="submit" value="Search" className="btn btn-warning" />
        <button type="button" id="current-button">
          My location
        </button>
      </form>
      <hr />
      <h2 className="city">{city}</h2>
      <div className="row">
        <div className="col-4">
          <div className="d-flex other-info">
            <ul>
              <li className="day-plus-time">Sunday, 15:33</li>
              <li className="weather-condition"></li>
              <li>
                Humidity: <span>{weather.humidity}</span>%
              </li>
              <li>
                Wind: <span>{weather.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>

        <div className="col-4">
          <div className="d-flex weather-image">
            <img src={weather.icon} alt={weather.description} />
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex temp">{weather.temperature}</div>
          <span className="degree-change">
            <a href="/" className="active">
              °C
            </a>
            |<a href="/">°F</a>
          </span>
        </div>
      </div>
    </div>
  );
}
