import React from "react";

import ContentItemList from "components/ContentItemList"; 
import LoadMoreButton from "components/LoadMoreButton"; 

/**
 * Side Video list block, not an actual page, just a block that is embedded within other pages.
 * @param {object} props - The component properties from within the react context.
 */
export default (props) => {

    //this will return null if we can't actually load more
    let loadMoreAction = props.loadMoreAction();

    let pageComponents = [];

    //get each content item and call a component to render it, dont display the current item in detail view
    for (var key in props.contentArray) {
        if (props.contentArray.hasOwnProperty(key)) {
            if (key !== props.contentId) {
                pageComponents.push(<ContentItemList pageId="side-video-list" key={key} contentData={ContentItem(props.contentArray, key)} />);
            }
        }
    }

    return (
        <div className="div-side-content-list">
            {pageComponents}
            <LoadMoreButton clickAction={loadMoreAction} />
        </div>
    );
}