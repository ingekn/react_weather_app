import React from "react";

import "./Forecast.css";

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
      <img
        className="Forecast-icon"
        src={props.data.condition.icon_url}
        alt="weather-icon"
      />
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
