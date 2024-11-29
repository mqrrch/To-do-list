import { useState } from 'react'
import { ItemSettings } from '../ItemSettings/ItemSettings'
import { } from '../../App'
import './Item.css'

export function Item({ id, itemName, completed, toggleCheckbox, removeToDo }){
    return(
        <li className='item'>
            <input className='item-check' 
            type='checkbox' 
            checked={completed}
            onChange={e => toggleCheckbox(id, e.target.checked)} />

            <p className='item-name'>{itemName}</p>

            <ItemSettings removeToDo={removeToDo} 
            id={id}
             />

        </li>
    )
}