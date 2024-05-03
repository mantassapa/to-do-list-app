import axios from "axios"
// import { useState } from "react"

export const postToDo = (data)=>{
    axios.post("http://localhost:5001/api/todo", data)
}

export const getToDo = (setToDoData)=>{
    axios.get("http://localhost:5001/api/todo")
    .then((res)=>setToDoData(res.data))
}
export const updateToDo = (id, data)=>{
    axios.put(`http://localhost:5001/api/todo/${id}`, data)
    // .then((res)=>alert("Great succes updating"))
}

export const deleteToDo = (id)=>{
    axios.delete(`http://localhost:5001/api/todo/${id}`)
    // .then((res)=>alert("Great succes deleted"))
}