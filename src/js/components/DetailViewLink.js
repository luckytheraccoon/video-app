import React from "react";
/**
 * Just a link that will send the user to the video detail.
 * 
 * @param {object} props - The component properties from within the react context.
 */
export default (props) => {
    return <a href={"?video=" + props.contentId}>{props.children}</a>;
}