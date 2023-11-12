import React from "react";

import "./App.css";

import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <Weather />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
