import React from "react";
import "../styles/NavBar.css";
import TodayDisplay from "./TodayDisplay";

export default function NavBar() {
  const current_city_details = JSON.parse(localStorage.getItem("mykey"));

  return (
    <div className="NavBar_page">
      <div className="navbar_page_title">Clime Zone</div>
      <a href="#dashboard">
        <div className="navbar_listitem">
          <div className="navbar_listitem_title">Dashboard</div>
        </div>
      </a>
      <a href="#statistics">
        <div className="navbar_listitem">
          <div className="navbar_listitem_title">Statistics</div>
        </div>
      </a>
      <a href="#Calender">
        <div className="navbar_listitem">
          <div className="navbar_listitem_title">Calender</div>
        </div>
      </a>
      <a href="#Settings">
        <div className="navbar_listitem">
          <div className="navbar_listitem_title">Settings</div>
        </div>
      </a>
      {current_city_details == null ? (
        <div className="navbar_today_box">
          <div className="current_weather_display">
            Search and select a city to display current weather
          </div>
        </div>
      ) : (
        <div className="navbar_today_box">
          <TodayDisplay />
        </div>
      )}
    </div>
  );
}
