import React from "react";

import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function configureDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return `${days[day]}`;
  }

  return (
    <div className="ForecastDay">
      <div className="Forecast-day">{configureDay()}</div>
      <WeatherIcon code={props.data.condition.icon} size={38} />
      <div className="Forecast-temp">
        <span className="Forecast-temp-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>

        <span className="Forecast-temp-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
