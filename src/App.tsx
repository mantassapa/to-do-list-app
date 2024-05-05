import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/main/Main';
import Footer from './components/Footer';
import TaskForm from './components/main/TaskForm';
import TaskFormEdit, { defaultObject } from './components/main/TaskFormEdit';
import { ToDoInter } from './interfaces/interface';

function App() {
  const [toDoData, setToDoData] = useState<Array<ToDoInter>>([])
  const [taskFormShow, setTaskFormShow] = useState<number>(0)
  const [taskFormEditShow, setTaskFormEditShow] = useState({
    show:0,
    el:defaultObject,
  })
  return (
    <div className="App">
      <Header setTaskFormShow={setTaskFormShow}/>
      <Main toDoData={toDoData} setToDoData={setToDoData} setTaskFormEditShow={setTaskFormEditShow}/>
      <div className='forms'>
      <TaskForm taskFormShow={taskFormShow} setTaskFormShow={setTaskFormShow}/>
      <TaskFormEdit toDoData={toDoData} taskFormEditShow={taskFormEditShow} setTaskFormEditShow={setTaskFormEditShow}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
