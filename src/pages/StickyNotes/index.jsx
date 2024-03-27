import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StickyNote from "./components/StickyNote";

import "./style.css";



const StickyNotes = () => {
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const loadNotes = JSON.parse(localStorage.getItem("notes"));

        setNotes(loadNotes);
    }, []);

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
            <div className="flex">
                {notes.map((note) => {
                    return <StickyNote note={note} key={note.id} />;
                })} 
            </div>
            </section>

        </section>

      </div>
    );
  };
  
  export default StickyNotes;
  