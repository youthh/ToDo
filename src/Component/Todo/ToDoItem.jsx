import React from "react";
import './ToDo.style.css'
import {  FaTrash } from 'react-icons/fa';
import {useSelector} from "react-redux";

const ToDoItem = (props) =>{
    let isTheme =  useSelector(state => state.ToDoSlices.isTheme)

    return(
        <div className={props.isCompleted ? "itemToDO complTodo" : "itemToDO"}>
            <div onClick={() => props.setCompleted(props.id, props.ref)} className={'check'}>
                <div className={(props.isCompleted ? 'compl' : '')
                + (isTheme ? ' dark' : '')
                }/>
            </div>
            
            <p className={isTheme ? 'text-dark' : ''}>{props.text}</p>
            <div className="items_todo">

                <button className="btn_delete">
                    <FaTrash color={isTheme ? "white" : '' }   onClick={() => props.deleteOneItem(props.id)}/>
                </button>
            </div>
        </div>
    )
}

export default ToDoItem;