import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import "./style.css";


const Weather = () => {
    const navigate = useNavigate();
    const [weather, setWeather] = useState([]);

    const loadWeather = async () => {
        const response = await axios.get("http://api.weatherapi.com/v1/forecast.json?q=33.981781, 35.633454&days=5");
    
        setWeather(response.data);
    
        localStorage.setItem("weather", JSON.stringify(response.data));
    };
    useEffect(() => {
        loadWeather();
      }, []);

    return (
      <div className="flex page column">
        <header>
        </header>
        <section className="flex column gap center">
            <div className="flex full-w center">
                <span className="bold primary-text"
                onClick = {() => {
                    navigate("/")
                  }}
                >Home</span>
                <h1 className="bold secondary-text">Here's the weather for the upcoming 5 days</h1>
            </div>

            <div className="flex">
                {weather.map((card) => {
                    return <WeatherCard card={card} key={card.id} />;
                })} 
                
                

            </div>
        </section>

      </div>
    );
  };
  
  export default Weather;
  