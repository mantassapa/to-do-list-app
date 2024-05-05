import React, { useState } from 'react'
import { TaskFormShowInter } from '../interfaces/interface'
import { deleteToDo } from '../config/config';
import { lightModeTogle } from '../config/sideFunctions';

const Header = ({setTaskFormShow}:TaskFormShowInter) => {
  const [showDelete, setShowDelete] = useState<Number>(0)

  const handleDeleteAll = (el:any) =>{
    const allId = document.querySelectorAll(".todo_card")
    allId.forEach((el)=>{
      deleteToDo(el.id)
    })
    alert("great success")
    setShowDelete(0)
  
  }
  return (
    <header>
        <button onClick={()=>{setTaskFormShow(1)}}>add new Task +</button>
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