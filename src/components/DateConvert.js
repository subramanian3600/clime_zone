import React, { useEffect, useState } from "react";

export default function DateConvert() {
  var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const current_city_details = JSON.parse(localStorage.getItem("mykey"));
  const timestamp = current_city_details.dt;
  const time = new Date(timestamp * 1000);
  const day = time.getDate();
  const mon = months[time.getMonth()];
  const daytit = days[time.getDay()];

  const format = daytit + ", " + day + " " + mon;

  return <div>{format}</div>;
}
