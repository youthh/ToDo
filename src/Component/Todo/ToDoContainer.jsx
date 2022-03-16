import React, { useRef} from "react";
import ToDo from "./ToDo";
import {useDispatch, useSelector} from "react-redux";
import {

    getTodoThunk,
    deleteToDo,

    addNewToDoThunk,
    completedTodoThunk, deleteOneToDo, setCompletedItem,
} from "../../Slices/ToDoSlices";



const ToDoContainer = () => {
    let refName = useRef()
    let refText = useRef()
    let userId = useSelector(state => state.ToDoSlices.user.id)

    let todo = useSelector(state => state.ToDoSlices.todo)
    let isLoading = useSelector(state => state.ToDoSlices.isFetching)
    let dispatch = useDispatch()

    const deleteAll = () => {
        dispatch(deleteToDo())
    }

    const deleteOneItem = (numberId) => {
        dispatch(deleteOneToDo(numberId)).then(() => {
            dispatch(getTodoThunk());
        })
    }

    const addTodo = (text) => {
        let t = text.current.value;

        if (t !== '') {
            dispatch(addNewToDoThunk({t, userId})).then(() => {
                dispatch(getTodoThunk());
            })
        }

    }

    const setCompleted = (data, ref) => {
        dispatch(setCompletedItem(data));
        dispatch(completedTodoThunk(data))
    };

    const handleChange = (e) => {
        let value = e.target.value;

        dispatch(getTodoThunk(value));
    }



    return(
             <ToDo
                 isLoading={isLoading}
                todo={todo}
                deleteAll={deleteAll}
                refName={refName}
                refText={refText}
                addTodo={addTodo}
                 setCompleted={setCompleted}
                 deleteOneItem={deleteOneItem}
                 handleChange={handleChange}

            />
    )
}


export default ToDoContainer;