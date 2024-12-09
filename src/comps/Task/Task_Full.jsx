import { useState, useEffect } from 'react'
import { ItemList } from './ItemList/ItemList'
import { AddItem } from './AddItem/AddItem'
import './Task_Full.css'

export function Task_Full() {
  const [toDoItems, setToDoItems] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(toDoItems))
  }, [toDoItems])

  function addToDo(itemName) {
    setToDoItems(currentList => {
      return [
        ...currentList,
        {
          id: crypto.randomUUID(),
          itemName,
          completed: false
        }
      ]
    })
  }

  function toggleCheckbox(id, completed) {
    setToDoItems(currentList => {
      return currentList.map(item => {
        if (item.id === id){
          return {...item, completed}
        }
        return item
      })
    })
  }

  function removeToDo(id) {
    setToDoItems(currentList => {
      return currentList.filter(item => item.id !== id)
    })
  }

  function removeAllToDo() {
    setToDoItems([])
    console.log(toDoItems)
  }

  function editToDo(id, newName) {
    setToDoItems(currentList => {
      return currentList.map(item => {
        if (item.id === id){
          return {...item, itemName: newName}
        }
        return item
      })
    })
  }

  return (
      <div id='items-container'>
        <AddItem addToDo={addToDo}
        toDoItems={toDoItems}
        removeAllToDo={removeAllToDo} />

        <ItemList toDoItems={toDoItems} 
        setToDoItems={setToDoItems} 
        toggleCheckbox={toggleCheckbox} 
        removeToDo={removeToDo}
        editToDo={editToDo} />
      </div>
  )
}