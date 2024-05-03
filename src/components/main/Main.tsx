import React, { useEffect, useState } from 'react'
import { deleteToDo, getToDo, updateToDo } from '../../config/config'
import { MainInter, TaskFormEditShowInter, ToDoInter } from '../../interfaces/interface'
import { defaultObject } from './TaskFormEdit'



const Main = ({toDoData,setToDoData,setTaskFormEditShow}:MainInter) => {
    const [getToDoData, setGetToDoData] = useState<number>(0)

    // const [toDoData, setToDoData] = useState<Array<ToDoInter>>([])
    useEffect(()=>{
        getToDo(setToDoData)
    },[getToDoData,toDoData])

    const handleDelete =(el:any)=>{
      el.preventDefault()
        deleteToDo(el.target.parentNode.id)
      // toDoData.map((el)=>{if(el._id===id){
      //   toDoData.splice(toDoData.indexOf(el),1)
      
      //   setToDoData(toDoData)
      // }})
      // document.getElementById(el.target.parentNode.id)?.remove()
    }



    const handleCheck=(el:any)=>{
      toDoData.forEach((e)=>{
        if(e._id===el.target.parentNode.id){
          e.finished=el.target.checked
          updateToDo(el.target.parentNode.id, e)
        }
      
      })
      
      
      // setToDoData((prev:any)=>({
      //   ...prev,
      //   finished:el.target.checked
      // }))
      // setToDoData({finished:el.target.checked})


    }
    
  return (
    <main>
       {toDoData?.map((el, index)=>(
            <div className='todo_card' key={el._id} id={el._id}>
                {/* <h3>{el._id}</h3> */}
                <h3>{el.title}</h3>
                <h4>{el.description}</h4>
                <h5>Start: {el.start}</h5>
                <h5>End: {el.end}</h5>
                <button onClick={()=>setTaskFormEditShow({show:1,el:{
                      _id: String(el._id),
                      title: String(el.title),
                      description: String(el.title),
                      start: String(el.start),
                      end: String(el.end),
                      added:Number(el.added),
                      updated:Number(el.updated),
                      finished:Boolean(el.finished),
                }})}>edit</button>
                <button onClick={handleDelete}>delete</button>

                <label htmlFor="finish_checkbox">Finished:</label>
                <input id='finish_checkbox' type="checkbox" name='finished' checked={el.finished} onChange={handleCheck}/>

            </div>
        ))}
    </main>
  )
}

export default Main
