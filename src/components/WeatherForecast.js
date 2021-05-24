import React, { useEffect, useState } from "react";
import "../styles/WeatherForecast.css";
import searchicon from "../assets/images/search.svg";
import axios from "axios";

function WeatherForecast() {
  const [countryimage, setcountryimage] = useState("");
  const [countryloc, setcountryloc] = useState("");
  const [country_name, setcountry_name] = useState({});

  const api_id = "51504683e868d818bf34a84d6fe932b4";
  const client_id_unsplash = "pHwnVw1zL1zZbKImPwM7zplIx_d_r4dZ0uhIWfQjRSQ";

  const current_city_for_image = countryloc.name;

  const fetchCityName = async (e) => {
    e.preventDefault();
    if (country_name === "") {
      alert("add !");
    } else {
      const climate_url = "http://api.openweathermap.org/data/2.5/weather?";
      const response = await axios
        .get(climate_url + `units=metric&q=${country_name}&appid=${api_id}`)
        .catch((err) => {
          console.log(err);
        });
      setcountryloc(response.data);
    }
  };

  const postCountryDetails = () => {
    localStorage.setItem("mykey", JSON.stringify(countryloc));
    document.location.reload();
  };

  const fetchCityImage = async (e) => {
    if (current_city_for_image === "") {
      alert("no city");
    } else {
      const unsplash_url = "https://api.unsplash.com/search/photos?";
      const imageresponse = await axios
        .get(
          unsplash_url +
            `query=${current_city_for_image}&client_id=${client_id_unsplash}`
        )
        .catch((err) => {
          console.log(err);
        });
      setcountryimage(imageresponse.data.results[0].urls.thumb);
    }
  };
  useEffect(() => {
    fetchCityImage();
  }, [current_city_for_image]);

  return (
    <div className="WeatherForecast_page">
      <div className="WeatherForecast_page_top">
        <div className="WeatherForecast_page_top_search">
          <img src={searchicon} alt="search" />
          <form>
            <input
              type="search"
              placeholder="Search"
              onChange={(e) => {
                setcountry_name(e.target.value);
              }}
            />

            <button
              type="submit"
              onClick={(e) => {
                fetchCityName(e);
                fetchCityImage(e);
              }}
            >
              s
            </button>
          </form>
        </div>
        {/*
        <div className="WeatherForecast_page_top_person">
          <img src={searchicon} alt="person" />
          <div className="WeatherForecast_page_top_person_name">
            subramanian
            <button>
              <svg
                width="24"
                height="14"
                viewBox="0 0 24 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97918 22.6066 1.3934C22.0208 0.807612 21.0711 0.807612 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11V12H13.5V11H10.5Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
        */}
      </div>

      <div className="WeatherForecast_page_bottom">
        <label>Weather Forecast</label>
        {current_city_for_image === undefined ? (
          <div className="to_show_here">Search cities to show here !</div>
        ) : (
          <>
            <div className="weatherforecast_city_cards">
              <button onClick={postCountryDetails}>
                <div className="weatherforecast_city_card">
                  <img src={countryimage} alt={current_city_for_image} />
                  <label>{countryloc.name}</label>
                </div>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default WeatherForecast;
