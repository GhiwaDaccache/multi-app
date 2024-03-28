import React from "react";

const WeatherCard = ({ card }) => {
    const {date, day} = card;

    return (
        <div className="weather-card primary-bg shadow flex column secondary-text gap">
            <div className="card-header flex center full-w">
            <h4>Day: {date}</h4>
            </div>
            <div className="flex align-center justify-between"><h4>Condition: </h4><p> {day.condition.text}</p></div>
            <div className="flex align-center justify-between"><h4>Temperature: </h4><p> {day.avgtemp_c}</p></div>
            <img className="image" src={day.condition.icon} alt="Weather Icon" />
        </div>
    );
};

export default WeatherCard;


