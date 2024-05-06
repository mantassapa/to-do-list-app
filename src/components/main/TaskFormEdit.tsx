import React, { useEffect, useState } from 'react'
import { TaskFormEditShowInter } from '../../interfaces/interface'
import { updateToDo } from '../../config/config'

const TaskFormEdit = ({taskFormEditShow,setTaskFormEditShow,setGetToDoData}:TaskFormEditShowInter) => {
    const theOnesData = taskFormEditShow.el
    const [formData, setFormData] = useState<any>(theOnesData)
    const handleChange=(el:any)=>{
        const {name, value} = el.target
        setFormData((prev:any)=>({
            ...prev,
            [name]:value
        }))
    }
    useEffect(()=>{
        setFormData(theOnesData)   
    },[theOnesData])
    

    

    const handleSubmit =(ev:React.FormEvent)=>{
        ev.preventDefault()
        setFormData((prev:any)=>({
            ...prev,
            updated:Date.now() 
        }))
        updateToDo(theOnesData._id, formData)
        setGetToDoData([])
        // alert("great succes Updating")
    }
    // console.log("log");
    
    // console.log(theOnesData._id);
    // console.log(theOnesData);
    //     toDoData.map((el)=>{if(el._id===taskFormEditShow.id){
    //     toDoData.splice(toDoData.indexOf(el),1)
      
    //     setFormData(toDoData)
    //   }})
 
    if(taskFormEditShow?.show===1){
        return (
            <div className='task_form_edit'>
                <h3>Update task</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="taskform_input--title">Title: </label>
                    <input id='taskform_input--title' type="text" name='title' value={formData.title} onChange={handleChange} required/>
                    <label htmlFor="taskform_input--description">Description: </label>
                    <textarea id="taskform_input--description" name='description'  value={formData.description} onChange={handleChange}></textarea>
                    <label htmlFor="taskform_input--startdate">Start: </label>
                    <input id='taskform_input--startdate' type="datetime-local" name='start' value={formData.start} min={formData.start} onChange={handleChange}/>
                    <label htmlFor="taskform_input--enddate">End: </label>
                    <input id='taskform_input--enddate' type="datetime-local" name='end' value={formData.end} min={formData.end} onChange={handleChange}/>
                    <button type='submit'>Update</button>
                </form>
                <button onClick={()=>setTaskFormEditShow({show:0,el:defaultObject})}>Exit</button>
            </div>
        )
    }else{
        return null
    }
}

export const defaultObject = {
    _id: "",
    title:"",
    description:"",
    start:new Date(Date.now()).toISOString().slice(0, 16),
    end:new Date(Date.now()).toISOString().slice(0, 16),
    added:Date.now(),
    updated:Date.now(),
    finished:false,
}

export default TaskFormEdit