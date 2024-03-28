import React, {useState} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";  
import { faPlus } from "@fortawesome/free-solid-svg-icons"; 

const StickyNote = ({note}) => {
    
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")));
    const [content, setContent] = useState("");

    const updateNote = (updatedNote) => {
        const updatedNotes = notes.map(note => 
            note.id === updatedNote.id ? updatedNote : note
        );
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    };

    const handleContentChange = (event) => {
        const newContent = event.target.value;
        setContent(newContent);
        updateNote({
            ...note,
            content: newContent
        });
    };

    const addNote = () => {
        const newNote = { id: notes.length + 1, content: "" };
        const updatedNotes = [...notes, newNote];
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    };
    
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
            value={content}
            onChange={handleContentChange}
            
            ></input>
        </div>
    );
};

export default StickyNote;