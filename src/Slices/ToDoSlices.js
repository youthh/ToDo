import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {DataStore, Predicates, SortDirection} from "@aws-amplify/datastore";
import {Todo, Usersi} from "../models";

export const getTodoThunk = createAsyncThunk(
    'toDo/getTodoThunk',

    async (data) => {

        return [await DataStore.query(Todo), data];
    }
)


export const getAllUsers = createAsyncThunk(
    'toDo/getAllUsers',
    async () => {
        return  await DataStore.query(Usersi)


    }
)

export const addNewToDoThunk = createAsyncThunk(
    'toDo/addNewToDoThunk',
    async (data) => {

        await DataStore.save(new Todo({

            description: data.t,
            isCompleted: false,
            userId: data.userId
        }));
    }
)

export const deleteToDo = createAsyncThunk(
    'toDo/deleteToDo',

    async () => {
        await DataStore.delete(Todo, Predicates.ALL);
    }
)

export const deleteOneToDo = createAsyncThunk(
    'toDo/deleteOneToDo',
    async (data) => {

        const todelete = await DataStore.query(Todo, data);
        await DataStore.delete(todelete);
    }
)

export const setUserThunk = createAsyncThunk(
    'toDO/setUserThunk',
    async (data) => {

        await DataStore.save(new Usersi({
            login: data.name,
            email: data.email,

        }))
    }
)

export const getCurrentUserThunk = createAsyncThunk(
    'toDo/getCurrentUserThunk',
    async (data) => {

        return   [await DataStore.query(Usersi), data];
    }
)

export const completedTodoThunk = createAsyncThunk(
    'toDo/completedTodoThunk',
    async (data) => {

        const origin = await DataStore.query(Todo, data);
        await DataStore.save(
            Todo.copyOf(origin, updated => {
                updated.isCompleted = !updated.isCompleted;
            })
        )
    }
)

const ToDoSlices = createSlice({
    name: 'toDo',

    initialState: {
        init: false,
        todo: [],
        isActiveMenu: false,
        isFetching: false,
        showModal: true,
        auth: false,
        isTheme: false,
        user: {
            id: null,
            email: null,
            login: null,
            img: null
        }
    },

    reducers: {
        setCompletedItem: (state, action ) => {
            state.todo.map((i) => {
                if (i.id === action.payload) {
                    i.isCompleted = !i.isCompleted
                }
            })
        },
        setToDo: (state, action) => {

            state.todo = action.payload
        },
        addNewTodo: (state, action) => {
            // state.todo.push(action.payload)

        },
        setModal: (state) => {
            //state.showModal = !state.showModal
        },
        setUser: (state, action) => {

            state.auth = true
            state.user.email = action.payload[0].email
            state.user.login = action.payload[0].name
            state.user.id = action.payload[1]
        },
        setTheme: (state) => {
            state.isTheme = !state.isTheme
        },
        setMenu: (state) => {
            state.isActiveMenu = !state.isActiveMenu;
        },
        setInit: (state) => {
            state.init = !state.init
        },
        deleteUser: (state) => {
            state.auth = false
            state.user.email = null
            state.user.login = null
            state.user.id = null
        }
    },

    extraReducers: {
        [getTodoThunk.pending]: (state, action) => {
            state.isFetching = true
        },
        [getTodoThunk.fulfilled]: (state, action) => {
            state.isFetching = false

            let todos = []

            action.payload[0].map((i) => {

                if (i.userId === state.user.id) {
                    todos.push(i);
                }
            })
            if (action.payload[1] === undefined) {
                state.todo = todos
            } else {
                state.todo = todos.filter((i) => {

                    if (action.payload[1] == 2) {
                        return state.todo = todos

                    } else if (i.isCompleted == action.payload[1]) {
                        return i
                    }


                })
            }

        },
        [deleteToDo.fulfilled]: (state, action) => {
            state.todo = []
        },

        [getCurrentUserThunk.fulfilled]: (state, action) => {
            action.payload[0].map((i) => {
                if (i.email === action.payload[1]) {

                    state.user.id = i.id


                }
            })
        }
    }

})


export const {deleteUser, setInit,setCompletedItem, setMenu, setUser, addNewTodo, setModal, setTheme} = ToDoSlices.actions

export default ToDoSlices.reducer