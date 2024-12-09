import { useState } from "react"
import './AddItem.css'

export function AddItem({ addToDo, toDoItems, removeAllToDo }){
    const [itemName, setItemName] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (itemName === '') return;

        addToDo(itemName);

        setItemName('');
    }

    const handleRemoveAll = (e) => {
        e.preventDefault();

        if (toDoItems.length === 0) return;

        removeAllToDo();
    }

    return (
        <>
            {toDoItems.length >= 10 ? (
                <form id="item-input-form">
                    <input id='item-input' 
                    value='Enter task'
                    disabled />
    
                    <input id='item-submit' 
                    placeholder="Enter task"
                    type='submit' 
                    value='Add Task'
                    disabled />

                    <button id="item-remove-all" onClick={handleRemoveAll}>Remove All</button>
                </form>
            ) : (
                <form id="item-input-form" >
                    <input id='item-input'
                    placeholder="Enter task" 
                    maxLength={25}
                    onChange={e => setItemName(e.target.value)}
                    value={itemName}
                    onKeyDown={e => e.key === 'Enter' && handleSubmit(e)} />

                    <input id='item-submit' 
                    type='submit' 
                    value='Add Task'
                    onClick={handleSubmit} />

                    <button id="item-remove-all" onClick={handleRemoveAll}>Remove All</button>
                </form>
            )}
        </>
    )
}