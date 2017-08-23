import React from "react";
import ContentItemList from "components/ContentItemList";
import LoadMoreButton from "components/LoadMoreButton"; 
/**
 * Video list page.
 * @param {object} props - The component properties from within the react context.
 */
export default (props) => {

    //this will return null if we can't actually load more
    const loadMoreAction = props.loadMoreAction(),
    pageComponents = [];

    //get each content item and call a component to render it
    for (var key in props.contentArray) {
        if (props.contentArray.hasOwnProperty(key)) {
            pageComponents.push(
                <ContentItemList
                    pageId="video-list"
                    key={key}
                    contentData={props.contentArray[key]}
                />
            );
        }
    }

    return (
        <div className="div-content-list">
            {pageComponents}
            <LoadMoreButton clickAction={loadMoreAction} />
        </div>
    );
}