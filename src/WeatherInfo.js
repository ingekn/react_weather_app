import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

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
          <div className="d-flex temp">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
