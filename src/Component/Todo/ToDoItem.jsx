import React from "react";
import './ToDo.style.css'
import {  FaTrash } from 'react-icons/fa';

const ToDoItem = (props) =>{

    return(
        <div className={props.isCompleted ? "itemToDO complTodo" : "itemToDO"}>
            <div onClick={() => props.setCompleted(props.id, props.ref)} className={'check'}>
                <div className={props.isCompleted ? 'compl' : ''}/>
            </div>
            
            <p>{props.text}</p>
            <div className="items_todo">

                <button className="btn_delete">
                    <FaTrash   onClick={() => props.deleteOneItem(props.id)}/>
                </button>
            </div>
        </div>
    )
}

export default ToDoItem;