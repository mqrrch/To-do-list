import './Notes_Remainders.css'

export function NotesAndRemainders() {
    return (
        <div id="notes-remainders">
            <div id='notes'>
                <h3>Notes</h3>
                <textarea id="note-text"></textarea>
            </div>
            <div id='remainders'>
                <h3>Remainders</h3>
                <textarea id="remainder-text"></textarea>
            </div>
        </div>
    )
}