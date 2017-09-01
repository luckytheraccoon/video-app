import React from "react";
/**
 * A simple component that renders the detail view of a item.
 * 
 * @param {object} props - The component properties from within the react context.
 */
export default (props) => {

    let content = props.contentData;

    return (
        <div>
            <div className="div-iframe-container">
                <VideoIframe videoUrl={content.videoUrl} />
            </div>
            <div className="title">
                {content.title}
            </div>
            <div className="description">
                {content.description}
            </div>
        </div>
    );
}