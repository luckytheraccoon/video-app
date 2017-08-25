import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

/**
 * Just a link that will send the user to the video detail.
 * 
 * @param {object} props - The component properties from within the react context.
 */
export default (props) => {
    return <Link to={"/video/"+props.contentId}>{props.children}</Link>;
}