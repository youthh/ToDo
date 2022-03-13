import React, {useEffect, useRef, useState} from "react";
import './ToDo.style.css'
import ToDoItem from "./ToDoItem";
import {useDispatch, useSelector,} from "react-redux";
import Load from "../Loader/Load";

const ToDo = (props) => {
    let ref = useRef();

    return(
        <div className="main_box">
            <div className="create-new-todo">

                <input ref={props.refText} placeholder="text..." type="text"/>
                <button onClick={() => props.addTodo(props.refText, props.refName)} >add</button>
                <button onClick={() => props.deleteAll()} >delete all</button>
            </div>
            <div>
                <select ref={ref}  onChange={(e) => props.handleChange(e)}  name="box" id="d">
                    <option selected="selected" value="2">All</option>
                    <option value="1">Completed</option>
                    <option value="0">Active</option>
                </select>
            </div>
            <div className="show-todo">
                {
                    props.isLoading ? <Load/> :

                       props.todo.length !== 0 ?  props.todo.map((i, index) => {

                           return <ToDoItem id={i.id}
                                            setCompleted={props.setCompleted}
                                            deleteOneItem={props.deleteOneItem}
                                            key={index}
                                            name={i.name}
                                            isCompleted={i.isCompleted}
                                            text={i.description}
                                            ref={ref}
                           />
                       }) : <h2>No To do yet</h2>
                }
            </div>
        </div>
    )
}

export default ToDo;