import React, { useRef} from "react";
import './ToDo.style.css'
import ToDoItem from "./ToDoItem";

import Load from "../Loader/Load";

const ToDo = (props) => {
    let ref = useRef();

    return(
        <div className="main_box">
            <div className="create-new-todo">
                <input className="input" ref={props.refText} placeholder="text..." type="text"/>

                <button className="btn" onClick={() => props.addTodo(props.refText, props.refName)} >add</button>
            </div>
            <div>
                <select className="select" ref={ref}  onChange={(e) => props.handleChange(e)}  name="box" id="d">
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
                       }) : <h2 className="no_todo-title">No To do yet</h2>
                }
            </div>
        </div>
    )
}

export default ToDo;