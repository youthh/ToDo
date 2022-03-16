import React, {useEffect} from "react";
import {useAuthenticator, withAuthenticator} from "@aws-amplify/ui-react";

import '@aws-amplify/ui-react/styles.css';
import './auth.style.css'
import {useDispatch, useSelector} from "react-redux";
import {
    getTodoThunk,
    setUser,
} from "../Slices/ToDoSlices";
import {Auth} from "aws-amplify";

const AuthC = () => {

    let {user} = useAuthenticator();
    let dispatch = useDispatch()
    let isAuth = useSelector(state => state.ToDoSlices.auth);


    useEffect(() => {

        if (user !== null) {

            if (!isAuth) {
                Auth.currentUserInfo().then(user => {
                    dispatch(setUser([user.attributes, user.id]))
                    dispatch(getTodoThunk())
                })
            }

        }

    }, [])

    return(
        <div>

        </div>
    )
}


export default withAuthenticator(AuthC);