import React, { useState, useEffect } from "react";

export default function TimeConvert() {
  const current_city_details = JSON.parse(localStorage.getItem("mykey"));
  const timestamp = current_city_details.dt;
  var date = new Date(timestamp * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var formattedTime = hours + ":" + minutes.substr(-2);

  return <div>{formattedTime}</div>;
}
