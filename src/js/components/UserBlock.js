import React from "react";

import Glyphicon from "./Glyphicon"; 
/**
 * Simple component that renders the user block.
 */
export default () => {
    return(
        <div className="div-user-block">
            <div className="div-user-photo"><Glyphicon iconSuffix="user" /></div>
            <div className="div-user-name">User Name</div>
        </div>
    );
}