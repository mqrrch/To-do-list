import { useState } from "react"
import './AddItem.css'

export function AddItem({ onSubmit }){
    const [itemName, setItemName] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (itemName === '') return;

        onSubmit(itemName);

        setItemName('');
    }

    return (
        <form className="item-input-form" onSubmit={handleSubmit}>
            <input className='item-input' 
            maxLength={20}
            onChange={e => setItemName(e.target.value)}
            value={itemName}
            onKeyDown={e => e.key === 'Enter' && handleSubmit(e)} />

            <input className='item-submit' 
            type='submit' 
            value='Add Task'
            onClick={handleSubmit} />
        </form>
    )
}