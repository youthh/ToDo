import React, {useEffect, useRef, useState} from "react";
import {DataStore, Predicates} from "@aws-amplify/datastore";
import {Todo} from "../../models";
import './ToDo.style.css'
import ToDoItem from "./ToDoItem";

const ToDo = () => {



    return(
        <div className="main_box">
            <div className="create-new-todo">

                <input  placeholder="name..." type="text"/>
                <input  placeholder="text..." type="text"/>
                <button >add</button>
                <button >delete all</button>
            </div>
            <div className="show-todo">
                {

                }
            </div>
        </div>
    )
}

export default ToDo;