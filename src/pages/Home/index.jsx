import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake } from "@fortawesome/free-solid-svg-icons"; 
import { faCalculator } from "@fortawesome/free-solid-svg-icons"; 
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons"; 


const Home = () => {
  const navigate = useNavigate();

    return (
      <div className="flex page column">
        <header>
        </header>
        <section className="flex column gap center">
          <h1 className="bold secondary-text">Your digital swiss knife</h1>
          <div className="flex">

            <div className="application primary-bg shadow flex center column gap" 
            onClick = {() => {
              navigate("/weather")
            }}
            >
              <FontAwesomeIcon icon={faSnowflake} size="7x" style={{color: "#01109d"}} />
              <h3 className="bold secondary-text">Weather</h3>
            </div>

            <div className="application primary-bg shadow flex center column gap" 
            onClick = {() => {
              navigate("/calculator")
            }}
            >
              <FontAwesomeIcon icon={faCalculator} size="7x" style={{color: "#01109d"}} />
              <h3 className="bold secondary-text">Calculator</h3>
            </div>

            <div className="application primary-bg shadow flex center column gap" 
            onClick = {() => {
              navigate("/sticky-notes")
            }}
            >
              <FontAwesomeIcon icon={faNoteSticky} size="7x" style={{color: "#01109d"}} />
              <h3 className="bold secondary-text">Sticky notes</h3>
            </div>

          </div>
        </section>
      </div>
    );
  };
  
export default Home;

  