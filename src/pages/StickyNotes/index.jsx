import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StickyNote from "./components/StickyNote";

import "./style.css";



const StickyNotes = () => {
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);

    useEffect(() => {
      const storedNotes = localStorage.getItem("notes");
        // const storedNotes = JSON.parse(localStorage.getItem("notes") ?? "[{ id: 0, content: ''}]" );
        let loadNotes 
        if(!storedNotes){
          loadNotes = [{ id: 0, content: "" }];
          localStorage.setItem("notes", JSON.stringify(loadNotes));
        }else{
          loadNotes = JSON.parse(storedNotes)
        }
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
            {notes.map((note, i) => {
                    return <StickyNote note={note} key={i+1} />;
                })} 
            </div>
            </section>

        </section>

      </div>
    );
  };
  
  export default StickyNotes;
  