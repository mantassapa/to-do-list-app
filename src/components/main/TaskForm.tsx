import React, { InputHTMLAttributes, useState } from 'react'
import { TaskFormShowInter, ToDoInter } from '../../interfaces/interface'
import { postToDo } from '../../config/config'

const TaskForm = ({taskFormShow, setTaskFormShow}:TaskFormShowInter) => {
    const [formData, setFormData] = useState({
        title:"",
        description:"",
        start:new Date(Date.now()).toISOString().slice(0, 16),
        end:new Date(Date.now()).toISOString().slice(0, 16),
        added:Date.now(),
        updated:Date.now(),
        finished:false,
    })
    // const today =  new Date(formData.date).toISOString().slice(0, 16)

    // console.log(today)

    const handleChange=(el:any)=>{
        const {name, value} = el.target
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))

    }
    const handleSubmit =(ev:React.FormEvent)=>{
        ev.preventDefault()
        setFormData((prev)=>({
            ...prev,
            added:Date.now(),
            updated:Date.now()
            
        }))
        postToDo(formData)
        // alert("great succes")
        
    }
    // console.log(formData.start);
    
    
 
    if(taskFormShow===1){
        return (
            <div className='task_form'>
                <h3>Add new task</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="taskform_input--title">Title: </label>
                    <input id='taskform_input--title' type="text" name='title' value={formData.title} onChange={handleChange} required/>
                    <label htmlFor="taskform_input--description">Description: </label>
                    <textarea id="taskform_input--description" name='description'  value={formData.description} onChange={handleChange}></textarea>
                    <label htmlFor="taskform_input--startdate">Start: </label>
                    <input id='taskform_input--startdate' type="datetime-local" name='start' value={formData.start} min={formData.start} onChange={handleChange}/>
                    <label htmlFor="taskform_input--enddate">End: </label>
                    <input id='taskform_input--enddate' type="datetime-local" name='end' value={formData.end} min={formData.end} onChange={handleChange}/>
                    <button type='submit'>Submit</button>
                </form>
                <button onClick={()=>setTaskFormShow(0)}>Exit</button>
            </div>
        )
    }else{
        return null
    }
}

export default TaskForm