// import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import axios from "axios";

import "./style.css";


const Calculator = () => {
    const navigate = useNavigate();

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
                <h1 className="bold secondary-text">Calculator</h1>
            </div>

            <div className="calculator flex column align-center primary-bg shadow">
                <div class="display white-bg">
                    <input type="text" id="result" disabled />
                </div>
                <div class="buttons">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>+</button>
                    <button>-</button>
                    <button>x</button>
                    <button>/</button>
                    <button>C</button>
                    <button>=</button>
                </div>
                

            </div>
        </section>

      </div>
    );
  };
  
  export default Calculator;
  