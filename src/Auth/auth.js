import React, {useEffect} from "react";
import {useAuthenticator, withAuthenticator} from "@aws-amplify/ui-react";

import '@aws-amplify/ui-react/styles.css';
import './auth.style.css'
import {useDispatch} from "react-redux";
import {getAllUsers, getCurrentUserThunk, getTodoThunk, setModal, setUser, setUserThunk} from "../Slices/ToDoSlices";
import {Auth} from "aws-amplify";

const AuthC = () => {

    let {user} = useAuthenticator();
    let dispatch = useDispatch()

    useEffect(() => {
        if (user) {
            Auth.currentUserInfo().then(user => {
                dispatch(setUser([user.attributes, user.id]))
            }).then(() => {
                dispatch(getTodoThunk())
            })
        }
    }, [])

    return(
        <div>

        </div>
    )
}


export default withAuthenticator(AuthC);