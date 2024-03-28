import React, {useEffect, useState} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";  
import { faPlus } from "@fortawesome/free-solid-svg-icons"; 

const StickyNote = ({note}) => {
    
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")));


        const addNote = () => {
            const newNote = { id: notes.length + 1, content: "" };
            const updatedNotes = [...notes, newNote];
            setNotes(updatedNotes);
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
        };
    // new useState update text and pass it to content
    return (
        <div className="note flex column align-center primary-bg shadow">
            <div className="note-header full-w flex align-center">
                <FontAwesomeIcon icon={faTrashCan} size="2x" style={{color: "#01109d",}} 
                
                
                />
                <FontAwesomeIcon icon={faPlus} size="2x" style={{color: "#01109d",}}
                onClick={addNote}
                
                />
            </div>

            <input className="note-body full-w full-h secondary-text" 
            onChange={(e) => {
                localStorage.setItem("notes", JSON.stringify(e.target.value));
            }}
            
            ></input>
        </div>
    );
};

export default StickyNote;