import React from "react";

const WeatherCard = ({ card }) => {
    const { location, date, condition, temperature, icon } = card;

    return (
        <div className="weather-card primary-bg shadow flex column secondary-text">
            <h4>{location.region}</h4>
            <h4>{date}</h4>
            <h4>{condition}</h4>
            <h4>{temperature}</h4>
            <h4>{icon}</h4>
        </div>
    );
};

export default WeatherCard;


