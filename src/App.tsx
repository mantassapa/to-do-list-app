import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/main/Main';
import Footer from './components/Footer';
import TaskForm from './components/main/TaskForm';
import TaskFormEdit, { defaultObject } from './components/main/TaskFormEdit';
import { ToDoInter } from './interfaces/interface';
import { getToDo } from './config/config';

function App() {
  const [getToDoData, setGetToDoData] = useState<Array<Number>>([])
  const [toDoData, setToDoData] = useState<Array<ToDoInter>>([])
  const [taskFormShow, setTaskFormShow] = useState<number>(0)
  const [taskFormEditShow, setTaskFormEditShow] = useState({
    show:0,
    el:defaultObject,
  })
  useEffect(() => {
    //this is to make sure it gets right data from database after update
    getToDo(setToDoData)
    getToDo(setToDoData)
    getToDo(setToDoData)
    
},[getToDoData])



  return (
    <div className="App">
      <Header 
        taskFormShow={taskFormShow} 
        setTaskFormShow={setTaskFormShow}
        setTaskFormEditShow={setTaskFormEditShow}
        setGetToDoData={setGetToDoData}/>
      <Main 
        toDoData={toDoData} 
        setTaskFormEditShow={setTaskFormEditShow} 
        setTaskFormShow={setTaskFormShow}
        setGetToDoData={setGetToDoData}/>
      <div className='forms'>
      <TaskForm
       taskFormShow={taskFormShow}
        setTaskFormShow={setTaskFormShow}
        setTaskFormEditShow={setTaskFormEditShow}
        setGetToDoData={setGetToDoData}/>
      <TaskFormEdit
        taskFormEditShow={taskFormEditShow}
         setTaskFormEditShow={setTaskFormEditShow}
         setGetToDoData={setGetToDoData}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
