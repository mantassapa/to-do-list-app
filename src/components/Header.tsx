import React from 'react'
import { TaskFormShowInter } from '../interfaces/interface'
import { deleteToDo } from '../config/config';
import { lightModeTogle } from '../config/sideFunctions';

const Header = ({setTaskFormShow}:TaskFormShowInter) => {

  const handleDeleteAll = (el:any) =>{
    const allId = document.querySelectorAll(".todo_card")
    allId.forEach((el)=>{
      deleteToDo(el.id)
      el.remove()
    })
  
  }
  return (
    <header>
        <button onClick={()=>{setTaskFormShow(1)}}>add new Task +</button>
        <button onClick={()=>{}}>Order</button>
        <button onClick={handleDeleteAll}>Delete All</button>
        <button onClick={lightModeTogle}>Theme</button>
    </header>
  )
}

export default Header