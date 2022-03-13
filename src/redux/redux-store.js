//import {applyMiddleware} from '@reduxjs/toolkit'
import {combineReducers,compose,applyMiddleware, createStore} from "redux";
import thunkMiddleware  from "redux-thunk";
import ToDoSlices from "../Slices/ToDoSlices";




let reducers = combineReducers({
    ToDoSlices
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));




export default store