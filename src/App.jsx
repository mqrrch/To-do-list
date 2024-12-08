import { Task } from './comps/Task/Task.jsx'
import { NotesAndRemainders } from './comps/Notes/Notes_Remainders.jsx'
import './App.css'

function App() {

  return (
    <>
      <h2 id='title'>To Do List</h2>
      <div id='container'>
        <Task />
        <NotesAndRemainders />
      </div>
    </>
  )
}

export default App