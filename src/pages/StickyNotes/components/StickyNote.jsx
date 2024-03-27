import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";  
import { faPlus } from "@fortawesome/free-solid-svg-icons"; 

const StickyNote = ({note, key}) => {
    
    return (
        <div className="note flex column align-center primary-bg shadow">
            <div className="note-header full-w flex align-center">
                <FontAwesomeIcon icon={faTrashCan} size="2x" style={{color: "#01109d",}} />
                <FontAwesomeIcon icon={faPlus} size="2x" style={{color: "#01109d",}}/>
            </div>
            <input className="note-body full-w full-h secondary-text" 
            onChange={(e) => {
                setNotes(e.target.value)
                console.log(e.target.value)
                localStorage.setItem("notes", JSON.stringify(e.target.value));
            }}
            
            ></input>
        </div>
    );
};

export default StickyNote;


