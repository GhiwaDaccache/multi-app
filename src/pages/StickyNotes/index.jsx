import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import axios from "axios";

import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from "@fortawesome/free-regular-svg-icons"; 
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"; 
import { faPlus } from "@fortawesome/free-solid-svg-icons"; 


const StickyNotes = () => {
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
                <h1 className="bold secondary-text">Stick-it</h1>
            </div>
            
            <section className="flex center gap">
                <div className="note flex column align-center primary-bg shadow">
                    <div className="note-header full-w flex align-center">
                        <FontAwesomeIcon icon={faTrashCan} size="2x" style={{color: "#01109d",}} />
                        <FontAwesomeIcon icon={faPenToSquare} size="2x" style={{color: "#01109d",}} />
                        <FontAwesomeIcon icon={faPlus} size="2x" style={{color: "#01109d",}}/>
                    </div>
                </div>

                <div className="note flex column align-center primary-bg shadow">
                    <div className="note-header full-w"></div>
                </div>            
                
                <div className="note flex column align-center primary-bg shadow">
                    <div className="note-header full-w"></div>
                </div>            
                
                <div className="note flex column align-center primary-bg shadow">
                    <div className="note-header full-w"></div>
                </div>            
                
                <div className="note flex column align-center primary-bg shadow">
                    <div className="note-header full-w"></div>
                </div>
            </section>

        </section>

      </div>
    );
  };
  
  export default StickyNotes;
  