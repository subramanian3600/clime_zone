import React from "react";

export default function WindSpeed() {
  const current_city_details = JSON.parse(localStorage.getItem("mykey"));
  const wind = current_city_details.wind.speed;
  const format = "Wind : " + Math.round(wind * 3.6) + " Km/hr";
  return <div>{format}</div>;
}
