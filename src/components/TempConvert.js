import React, { useEffect, useState } from "react";

export default function TempConvert() {
  const current_city_details = JSON.parse(localStorage.getItem("mykey"));
  const format = Math.round(current_city_details.main.temp);

  return <div>{format}° C</div>;
}
