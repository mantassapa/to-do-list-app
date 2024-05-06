import React, { useState } from 'react'
import { TaskFormShowInter } from '../interfaces/interface'
import { deleteToDo } from '../config/config';
import { lightModeTogle } from '../config/sideFunctions';
import { defaultObject } from './main/TaskFormEdit';

const Header = ({taskFormShow,setTaskFormShow,setTaskFormEditShow,setGetToDoData}:TaskFormShowInter) => {
  const [showDelete, setShowDelete] = useState<Number>(0)

  const handleDeleteAll = (el:any) =>{
    const allId = document.querySelectorAll(".todo_card")
    allId.forEach((el)=>{
      deleteToDo(el.id)
    })
    alert("great success")
    setShowDelete(0)
    setGetToDoData([])
  
  }
  return (
    <header>
        <button onClick={()=>{setTaskFormShow(taskFormShow===0?1:0);;
          setTaskFormEditShow({show:0,el:defaultObject})}}>add new Task +</button>
        <button onClick={()=>{}}>Order</button>
        <button onClick={()=>{setShowDelete(1)}}>Delete All</button>
        {showDelete===1?
        <div className='delete_all'>
        <h5>Are you sure you want do delete everything?</h5>
        <button onClick={handleDeleteAll}>Yes</button>
        <button onClick={()=>setShowDelete(0)}>No</button>
        </div>:null}
        <button onClick={lightModeTogle}>Theme</button>
    </header>
  )
}

export default Header