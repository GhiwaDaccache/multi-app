import React from "react";

const WeatherCard = ({ card }) => {
    const {date, day} = card;

    return (
        <div className="weather-card primary-bg shadow flex column secondary-text gap">
            <h4><strong>Day: </strong>{date}</h4>
            <h4><strong>Location: Jounieh</strong></h4>
            <h4><strong>Condition: </strong>{day.condition.text}</h4>
            <h4><strong>Temperature: </strong>{day.avgtemp_c}</h4>
            <h4>{day.condition.icon}</h4>
        </div>
    );
};

export default WeatherCard;


