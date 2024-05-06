import React, { useEffect, useState } from 'react'
import { deleteToDo, getToDo, updateToDo } from '../../config/config'
import { MainInter, TaskFormEditShowInter, ToDoInter } from '../../interfaces/interface'
import { defaultObject } from './TaskFormEdit'



const Main = ({
  toDoData,
  setTaskFormEditShow,
  setTaskFormShow,
  setGetToDoData}:MainInter) => {


    const handleDelete =(el:any)=>{
      el.preventDefault()
        deleteToDo(el.target.parentNode.id)
        setGetToDoData([])

    }


    const handleCheck=(el:any)=>{
      toDoData.forEach((e)=>{
        if(e._id===el.target.parentNode.id){
          e.finished=el.target.checked
          updateToDo(el.target.parentNode.id, e)
          setGetToDoData([])
        }
      })
    }
    
  return (
    <main>
      <h1>My ToDo's</h1>
       {toDoData?.map((el, index)=>(
            <div className='todo_card' key={el._id} id={el._id}>
                {/* <h3>{el._id}</h3> */}
                <h3>{el.title}</h3>
                <h4>{el.description}</h4>
                <div id='start_end-time'>
                <h5>Start: {el.start}</h5>
                <h5>End: {el.end}</h5>
                </div>
                <button id='edit_btn' onClick={()=>{setTaskFormEditShow({show:1,el:{
                      _id: String(el._id),
                      title: String(el.title),
                      description: String(el.description),
                      start: String(el.start),
                      end: String(el.end),
                      added:Number(el.added),
                      updated:Number(el.updated),
                      finished:Boolean(el.finished),
                }});setTaskFormShow(0)}}>Edit</button>
                <button onClick={handleDelete} id='delete_btn'>Delete</button>
                <label id='finish_checkbox--label' htmlFor="finish_checkbox">Finished: </label>
                <input id='finish_checkbox' type="checkbox" name='finished' checked={el.finished} onChange={handleCheck}/>
            </div>
        ))}
    </main>
  )
}

export default Main
