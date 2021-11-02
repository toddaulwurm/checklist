import './App.css';
import React,{useState} from 'react';
import Checklist from './components/Checklist';
import ToDo from './components/ToDo';

function App() {
  const [currentToDo, setCurrentToDo] = useState([])

  const newToDo = (newToDo) =>{
    setCurrentToDo([...currentToDo, newToDo])
  }
  const changeFinished = idx => {
    const toDoChange = currentToDo[idx];
    toDoChange.finished = !toDoChange.finished;
    setCurrentToDo([...currentToDo]);
  }
  return (
    <div className="App">
      <Checklist onNewToDo={newToDo}></Checklist>
      <hr></hr>
      <ToDo toDo={currentToDo} finished={changeFinished}></ToDo>
    </div>
  );
}

export default App;
