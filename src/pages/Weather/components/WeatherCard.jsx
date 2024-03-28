import React from "react";

const WeatherCard = ({ card }) => {
    const {date, day} = card;

    return (
        <div className="weather-card primary-bg shadow flex column secondary-text gap">
            <h4>Day: {date}</h4>
            <h4>Location: Jounieh</h4>
            <h4>Condition: {day.condition.text}</h4>
            <h4>Temperature: {day.avgtemp_c}</h4>
            <img src={day.condition.icon} alt="Weather Icon" />
        </div>
    );
};

export default WeatherCard;


