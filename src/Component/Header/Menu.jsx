import React from "react";
import {PersonCircle} from "react-bootstrap-icons";
import {deleteUser, setMenu, setTheme} from "../../Slices/ToDoSlices";
import {useAuthenticator, withAuthenticator} from "@aws-amplify/ui-react";
import {useDispatch} from "react-redux";


const MenuBG = (props) => {

    let dispatch = useDispatch()
    let {signOut} = useAuthenticator()

    return (
        <div  className={props.isMenu ? "click_menu active" : "click_menu" }>
            <div className="img_profile">
                <PersonCircle color="white" size={30}/>
            </div>
            <h3 className="name_profile">{props.users.login}</h3>
            <div onClick={() => dispatch(setTheme())}
                 className={props.theme ? 'switch-btn switch-on' : 'switch-btn'}>🌜 🌞
            </div>
            <button className="btn" onClick={() => {
                signOut()
                dispatch(setMenu())
                dispatch(deleteUser())
            }}>Log out
            </button>

        </div>
    )
}


export default withAuthenticator(MenuBG);