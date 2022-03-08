import React from "react";
import './ToDo.style.css'

const ToDoItem = (props) =>{

    return(
        <div className={props.isCompleted ? "itemToDO complTodo" : "itemToDO"}>
            <h5>{props.id}</h5>
            <h1>{props.name}</h1>
            <p>{props.text}</p>
            <div className={props.isCompleted ? 'check compl' : 'check'}/>
        </div>
    )
}

export default ToDoItem;