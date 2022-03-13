import React from "react";
import "./Header.style.css"
import {setMenu, setModal, setTheme} from "../../Slices/ToDoSlices";
import {useDispatch, useSelector} from "react-redux";
import {PersonCircle} from "react-bootstrap-icons";
import {useAuthenticator, withAuthenticator} from "@aws-amplify/ui-react";


const Header = () => {
    let isAuth = useSelector(state => state.ToDoSlices.auth);
    let users = useSelector(state => state.ToDoSlices.user);
    let theme = useSelector(state => state.ToDoSlices.isTheme);
    let isMenu = useSelector(state => state.ToDoSlices.isActiveMenu);

    let dispatch = useDispatch()
    let {signOut} = useAuthenticator()
    return (
        <div className="cont">

            <h1 className="title">MyToDo</h1>
            {
                isAuth ? <div className="profile_box" >
                       <div onClick={() => dispatch(setMenu())} className="profile">
                           <div className="img_profile">
                               <PersonCircle color="white" size={30}/>
                           </div>
                           <h3 className="name_profile">{users.login}</h3>
                       </div>

                        <div  className={isMenu ? "click_menu active" : "click_menu" }>
                            <div onClick={() => dispatch(setTheme())}
                                 className={theme ? 'switch-btn switch-on' : 'switch-btn'}>🌜 🌞
                            </div>
                            <button onClick={() => {
                                signOut()
                            }}>Log out
                            </button>
                        </div>
                    </div> :

                    <button className="btn_si" onClick={() => dispatch(setModal())}>Log in</button>
            }

        </div>
    )
}


export default withAuthenticator(Header)