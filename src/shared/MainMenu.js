import React from "react";
import MainMenuItems from "./MainMenuItems"; 
import UserBlock from "./UserBlock"; 
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

/**
 * This renders the left menu.
 * 
 * @param {object} props - The component properties from within the react context.
 */
export default (props) => {
    //gets the menu buttons from an "external" source
    const menuItems = MainMenuItems().map((item, key) => {
        return <li key={key}><Link to={item.route}><button key={item.id}>{item.label}</button></Link></li>;
    });
    return (
        <div className={"div--main-menu " + props.className}>
            <UserBlock />
            <div className="div--main-menu-item-wrapper">
                <ul>{menuItems}</ul>
            </div>
            <div className="div--main-menu-logout">
                <button>Logout</button>
            </div>
        </div>
    );
}