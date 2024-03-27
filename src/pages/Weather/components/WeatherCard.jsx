import React from "react";

const WeatherCard = ({ card }) => {
    const {date, day} = card;

    return (
        <div className="weather-card primary-bg shadow flex column secondary-text">
            <h4>Location: Jounieh</h4>
            <h4>{date}</h4>
            <h4>{day.condition.text}</h4>
            <h4>{day.avgtemp_c}</h4>
            <h4>{day.condition.icon}</h4>
        </div>
    );
};

export default WeatherCard;


