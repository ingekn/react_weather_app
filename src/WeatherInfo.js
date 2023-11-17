import React from "react";
import FormattedDate from "./FormattedDate";

import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1 className="city">{props.data.city}</h1>
      <div className="row">
        <div className="col-4">
          <div className="d-flex other-info">
            <ul>
              <li className="day-plus-time">
                <FormattedDate date={props.data.date} />
              </li>
              <li className="weather-condition">{props.data.description}</li>
              <li>
                Humidity: <span>{props.data.humidity}</span>%
              </li>
              <li>
                Wind: <span>{props.data.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>

        <div className="col-4">
          <div className="d-flex weather-image">
            <img src={props.data.icon} alt={props.data.description} />
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex temp">{props.data.temperature}</div>
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
