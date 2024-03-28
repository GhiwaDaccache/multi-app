import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import axios from "axios";

import "./style.css";


const Calculator = () => {
    const navigate = useNavigate();
    const [display, setDisplay] = useState("");
    const [result, setResult] = useState(0);

    useEffect(() => {
      setDisplay(result);
  }, [result]);

  

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
                <div className="display white-bg">
                    <input type="text" value={display} disabled />
                </div>
                <div className="buttons">
                    <button onClick={() =>{
                      setDisplay(display + "1");
                    }}>1</button>
                    <button onClick={() =>{
                      setDisplay(display + "2");
                    }}>2</button>

                    <button onClick={() =>{
                      setDisplay(display + "3");
                    }}>3</button>

                    <button onClick={() =>{
                      setDisplay(display + "4");
                    }}>4</button>

                    <button onClick={() =>{
                      setDisplay(display + "5");
                    }}>5</button>

                    <button onClick={() =>{
                      setDisplay(display + "6");
                    }}>6</button>

                    <button onClick={() =>{
                      setDisplay(display + "7");
                    }}>7</button>

                    <button onClick={() =>{
                      setDisplay(display + "8");
                    }}>8</button>

                    <button onClick={() =>{
                      setDisplay(display + "9");
                    }}>9</button>

                    <button onClick={() =>{
                      setDisplay(display + "+");
                    }}>+</button>

                    <button onClick={() =>{
                      setDisplay(display + "-");
                    }}>-</button>

                    <button onClick={() =>{
                      setDisplay(display + "*");
                    }}>x</button>

                    <button onClick={() =>{
                      setDisplay(display + "/");
                    }}>/</button>

                    <button onClick={() =>{
                      setDisplay("");
                    }}>C</button>

                    <button onClick={() =>{
                      setResult(eval(display))
                    }}>=</button>
                </div>
                

            </div>
        </section>

      </div>
    );
  };
  
  export default Calculator;
  