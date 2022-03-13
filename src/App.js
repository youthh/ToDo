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

Amplify.configure(awsconfig);

function App() {
    let isModal = useSelector(state => state.ToDoSlices.showModal)

    return (
        <div className="App">
            <header>
                <Header/>
            </header>

            <ToDoContainer/>
            {
                isModal ? <AuthC/> : null
            }
        </div>
    );
}

export default App;
