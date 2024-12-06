import { useState, useRef } from 'react'
import { ItemSettings } from '../ItemSettings/ItemSettings'
import { } from '../../../App'
import './Item.css'

export function Item({ id, itemName, completed, toDoItems, toggleCheckbox, removeToDo, editToDo }){
    const [isEditing, setIsEditing] = useState(false)
    const [newName, setNewName] = useState(itemName)
    const inputRef = useRef(null)

    function handleSave() {
        if (newName.trim() === ''){
            removeToDo(id);
        } else{
            editToDo(id, newName)
        }
        setIsEditing(false)
    }

    return(
        <li className='item'>
            <input className='item-check' 
            type='checkbox' 
            checked={completed}
            onChange={e => toggleCheckbox(id, e.target.checked)} />

            {isEditing ? (
                <input ref={inputRef}
                onChange={e => setNewName(e.target.value)}
                value={newName}
                maxLength={20}
                onKeyDown={e => e.key === 'Enter' && handleSave()}
                onBlur={handleSave} />
            ) : (
                <p className='item-name'>{itemName}</p>
            )}

            <ItemSettings removeToDo={removeToDo} 
            id={id}
            inputRef={inputRef}
            toDoItems={toDoItems}
            setIsEditing={setIsEditing} />

        </li>
    )
}