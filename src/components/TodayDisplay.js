import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";
import DateConvert from "./DateConvert";
import TempConvert from "./TempConvert";
import TimeConvert from "./TimeConvert";
import WindSpeed from "./WindSpeed";

export default function TodayDisplay() {
  const [countrydetail, setcountrydetail] = useState("");
  const current_city_details = JSON.parse(localStorage.getItem("mykey"));
  useEffect(() => {
    setcountrydetail(current_city_details);
  }, []);

  const humitidy_percentage = `${current_city_details.main.humidity}%`;
  const precipitation_percentage = `${current_city_details.clouds.all}%`;

  return (
    <div>
      <div className="navbar_today_box_top">
        <div className="navbar_today_box_top_left"></div>
        <div className="navbar_today_box_top_right">
          <div className="navbar_today_box_today">Today</div>

          <div className="navbar_today_box_time">
            <TimeConvert />
          </div>
          <div className="navbar_today_box_day">
            <DateConvert />
          </div>
        </div>
      </div>
      <div className="navbar_today_box_mid">
        <div className="navbar_today_box_mid_deg">
          <TempConvert />{" "}
        </div>
        <div className="navbar_today_box_mid_city">
          {current_city_details.name}
        </div>
        <div className="navbar_today_box_mid_country">
          {current_city_details.sys.country}{" "}
        </div>
      </div>
      <div className="navbar_today_box_bottom">
        <div className="navbar_today_box_bottom_humitidy">
          <label>Humitidy</label>
          <span>{current_city_details.main.humidity}%</span>
        </div>
        <div className="navbar_today_box_bottom_humitidy_progress_bg">
          <div
            className="navbar_today_box_bottom_humitidy_progress"
            style={{ width: `${humitidy_percentage}` }}
          ></div>
        </div>
        <div className="navbar_today_box_bottom_precipitation">
          <label>Cloudiness</label>
          <span>{current_city_details.clouds.all}%</span>
        </div>
        <div className="navbar_today_box_bottom_precipitation_progress_bg">
          <div
            className="navbar_today_box_bottom_precipitation_progress"
            style={{ width: `${precipitation_percentage}` }}
          ></div>
        </div>
        <div className="navbar_today_box_bottom_humitidy">
          <WindSpeed />{" "}
        </div>
      </div>
    </div>
  );
}
