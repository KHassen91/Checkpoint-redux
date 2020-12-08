import React from 'react';
import './App.css';
import Addtask from './Components/Addtask';
import TaskList from './Components/TaskList';

function App() {

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Addtask />
      <TaskList />
    </div>

  );
}

export default App;

