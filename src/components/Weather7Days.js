import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Weather7Days.css";
import sun from "../assets/images/sun.svg";

export default function Weather7Days() {
  const [dailydata, setdailydata] = useState([]);
  const api_id = "51504683e868d818bf34a84d6fe932b4";

  const current_city_details = JSON.parse(localStorage.getItem("mykey"));
  if (current_city_details != null) {
    const lat = current_city_details.coord.lat;
    const lon = current_city_details.coord.lon;
    const onecallapi = async () => {
      const one_call_url = "https://api.openweathermap.org/data/2.5/onecall?";
      const response = await axios
        .get(
          one_call_url +
            `lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${api_id}`
        )
        .catch((err) => {
          console.log(err);
        });
      setdailydata(response.data.daily);
    }
    onecallapi();
  }

  function convertTime(time) {
    var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    var date = new Date(time * 1000);
    var num = date.getDate();
    var day = days[date.getDay()];
    var format = num + " " + day;
    return format;
  }

  return (
    <div className="display_7_days_page">
      {current_city_details === null ? (
        <div>
          <div className="display_7_day_cards">
            <div className="seven_day_display">
              Search and select a city to display forecast for upcoming 8 days
            </div>
          </div>
        </div>
      ) : (
        <>
          <label>{current_city_details.name}</label>
          <div className="display_7_day_cards">
            {dailydata.map((data) => {
              return (
                <div className="display_7_day_card">
                  <div className="display_7_day_card_image"></div>
                  <div className="display_7_day_card_temp">
                    {Math.round(data.temp.day)}° C
                  </div>
                  <div className="display_7_day_card_date">
                    {convertTime(data.dt)}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
