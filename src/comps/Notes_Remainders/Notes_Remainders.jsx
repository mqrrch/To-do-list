import { useState, useEffect } from 'react'
import './Notes_Remainders.css'

export function NotesAndRemainders() {
    const [notes, setNotes] = useState(() => {
        const localValue = localStorage.getItem('NOTES');
        if (localValue === null) return [];
        return JSON.parse(localValue);
    })
    const [remainders, setRemainders] = useState(() => {
        const localValue = localStorage.getItem('REMAINDERS')
        if (localValue === null) return [];
        return JSON.parse(localValue);
    })

    useEffect(() => {
        localStorage.setItem('NOTES', JSON.stringify(notes))
        localStorage.setItem('REMAINDERS', JSON.stringify(remainders))
    }, [notes, remainders])
    
    return (
        <div id="notes-remainders">
            <div id='notes'>
                <h3>Notes</h3>
                <textarea id="note-text"
                onChange={(e) => setNotes(e.target.value)}
                value={notes}></textarea>
            </div>

            <div id='remainders'>
                <h3>Remainders</h3>
                <textarea id="remainder-text"
                onChange={(e) => setRemainders(e.target.value)}
                value={remainders}></textarea>
            </div>
        </div>
    )
}