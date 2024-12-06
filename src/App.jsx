import { useState } from 'react'
import { ItemList } from './comps/Task/ItemList/ItemList'
import { AddItem } from './comps/Task/AddItem/AddItem'
import './App.css'

function App() {
  const [toDoItems, setToDoItems] = useState([])

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
    <>
      <h2 id='title'>To Do List</h2>

      <div id='items-container'>
        <AddItem onSubmit={addToDo}
        toDoItems={toDoItems}
        removeAllToDo={removeAllToDo} />

        <ItemList toDoItems={toDoItems} 
        setToDoItems={setToDoItems} 
        toggleCheckbox={toggleCheckbox} 
        removeToDo={removeToDo}
        editToDo={editToDo} />

      </div>

    </>
  )
}

export default App