import React from "react";
import "../styles/DashBoard.css";
import Weather7Days from "./Weather7Days";
import WeatherForecast from "./WeatherForecast";

export default function DashBoard() {
  return (
    <div className="DashBoard_page">
      <div className="weatherforecast_dashboard_page">
        <WeatherForecast />
      </div>
      <div className="weather7days_dashboard_page">
        <Weather7Days />
      </div>
    </div>
  );
}
