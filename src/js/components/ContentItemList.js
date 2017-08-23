import React from "react";

import DetailViewLink from "components/DetailViewLink"; 

/**
 * This renders a content item's details when being listed. 
 * 
 * Uses a switch to decide on particular details before actually rendering.
 * 
 * @param {object} props - The component properties from within the react context.
 */
export default function ContentItemList(props) {

    let content = props.contentData;
    let thumbnailClass;

    //its possible to limit the amount of characters on a title or description this way
    let title = content.title.substring(0, 35) + "...";
    let description = content.description.substring(0, 55) + "...";

    switch (props.pageId) {
        case "video-list":
            thumbnailClass = "thumbnail-large";
            break;
        case "side-video-list":
            thumbnailClass = "thumbnail-medium";
            break;
    }

    return (
        <div id={"content_" + content.index}>
            <div className={thumbnailClass}>
                <DetailViewLink contentId={content._id}>
                    <img src={content.thumbnailUrl} />
                </DetailViewLink>
            </div>
            <div className="title">
                <DetailViewLink contentId={content._id}>
                    {title}
                </DetailViewLink>
            </div>
            <div className="description">
                {description}
            </div>
        </div>
    );
} 