import React from "react";
//import axios from "axios";

import "./style.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Weather = () => {
    return (
      <div className="flex page column">
        <header>
        </header>
        <section className="flex column gap center">
          <h1 className="bold secondary-text">Here's the weather for the upcoming 6 days</h1>
          <div className="flex">
            <div className="application primary-bg shadow flex center column">
              {/* <FontAwesomeIcon icon="fa-light fa-snowflake" /> */}
              <h4>Weather</h4>
            </div>
            <div className="application primary-bg shadow flex center column">
              {/* <FontAwesomeIcon icon={faSnowflake} /> */}
              <h4>Calculator</h4>
            </div>
            <div className="application primary-bg shadow flex center column">
              {/* <FontAwesomeIcon icon={faSnowflake} /> */}
              <h4>Sticky notes</h4>
            </div>
          </div>
        </section>



        
      </div>
    );
  };
  
  export default Weather;
  