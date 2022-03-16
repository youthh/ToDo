import React from "react";
import './App.css';
import Header from "./Component/Header/Header";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import ToDoContainer from "./Component/Todo/ToDoContainer";
import '@aws-amplify/ui-react/styles.css';
import AuthC from "./Auth/auth";
import { useSelector} from "react-redux";

Amplify.configure(awsconfig);

function App() {
    let isModal = useSelector(state => state.ToDoSlices.showModal)
    let isTheme =  useSelector(state => state.ToDoSlices.isTheme)
    document.getElementsByClassName('.amplify-input').value = "2"
    return (
        <div className={isTheme ? 'App dark' : 'App'}>
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
