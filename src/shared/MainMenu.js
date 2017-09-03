import React from "react";

//this is where we keep the main menu controls, each page can have different controls
import MainMenuItems from "./MainMenuItems"; 

import UserBlock from "./UserBlock"; 

/**
 * This renders the left menu.
 * 
 * @param {object} props - The component properties from within the react context.
 */
export default (props) => {
    //gets the menu buttons from an "external" source
    const menuItems = MainMenuItems().map((item) => {
        return <button key={item.id}>{item.label}</button>;
    });
    return (
        <div className={"div--main-menu " + props.className}>
            <UserBlock />
            <div className="div--main-menu-item-wrapper">
                {menuItems}
            </div>
            <div className="div--main-menu-logout">
                <button>Logout</button>
            </div>
        </div>
    );
}