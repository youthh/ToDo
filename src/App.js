import React from "react";
import './App.css';
import {PersonCircle} from 'react-bootstrap-icons';
import Header from "./Component/Header/Header";
import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';
import awsconfig from './aws-exports';
import ToDoContainer from "./Component/Todo/ToDoContainer";
import '@aws-amplify/ui-react/styles.css';
import AuthC from "./Auth/auth";
import {useDispatch, useSelector} from "react-redux";
import Load from "./Component/Loader/Load";

Amplify.configure(awsconfig);

function App() {
    let isModal = useSelector(state => state.ToDoSlices.showModal)
    let isInit = useSelector(state => state.ToDoSlices.init);

    return (
        isInit ?  <div className="init"><Load/></div> :
        <div className="App">
            <header>
                <Header/>
            </header>

            <ToDoContainer/>
            {
                isModal ? <AuthC/> : ''
            }
        </div>
    );
}

export default App;
