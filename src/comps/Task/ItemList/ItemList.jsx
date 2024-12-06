import { Item } from '../Item/Item'
import './ItemList.css'

export function ItemList({ toDoItems, toggleCheckbox, removeToDo, editToDo }) {
    return (
        <ul id='item-list'>
            {toDoItems.length === 0 && 'No tasks yet!'}
            {toDoItems.map(item => {
                return (
                    <Item {...item} 
                    key={item.id} 
                    toggleCheckbox={toggleCheckbox}
                    removeToDo={removeToDo}
                    toDoItems={toDoItems}
                    editToDo={editToDo} />
                )
            })}
        </ul>
    )
}