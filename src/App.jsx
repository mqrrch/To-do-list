import { Task_Full } from './comps/Task/Task_Full.jsx'
import { NotesAndRemainders } from './comps/Notes_Remainders/Notes_Remainders.jsx'
import './App.css'

function App() {

  return (
    <>
      <h2 id='title'>To Do List</h2>
      <div id='container'>
        <Task_Full />
        <NotesAndRemainders />
      </div>
    </>
  )
}

export default App