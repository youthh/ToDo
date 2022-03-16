import React from "react";
import "./Header.style.css"
import {setMenu, setModal} from "../../Slices/ToDoSlices";
import {useDispatch, useSelector} from "react-redux";
import MenuBG from "./Menu";


const Header = () => {
    let isAuth = useSelector(state => state.ToDoSlices.auth);
    let users = useSelector(state => state.ToDoSlices.user);
    let theme = useSelector(state => state.ToDoSlices.isTheme);
    let isMenu = useSelector(state => state.ToDoSlices.isActiveMenu);

    let dispatch = useDispatch()
    return (
        <div className="cont">

            <h1 className="title">ToDoMaker</h1>
            {
                isAuth ? <div className={isMenu ? "profile_box active_prof" : "profile_box"} >
                       <div onClick={() => dispatch(setMenu())} className="profile">

                           <label  className="hamburger">
                               <div className="top-bun"/>
                               <div className="meat"/>
                               <div className="bottom-bun"/>
                           </label>
                       </div>

                      <MenuBG isMenu={isMenu} theme={theme} users={users}  />
                    </div> :

                    <button className="btn_si" onClick={() => dispatch(setModal())}>Log in</button>
            }

        </div>
    )
}


export default Header