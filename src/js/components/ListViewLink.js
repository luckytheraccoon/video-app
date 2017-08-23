import React from "react";

/**
 * Just a link that will send the user to the video list.
 * 
 * @param {object} props - The component properties from within the react context.
 */
export default (props) => {
    return <a href="/">{props.children}</a>;
}