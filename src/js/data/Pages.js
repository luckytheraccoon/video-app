import React from "react";
import VideoDetail from "components/pages/VideoDetail";
import VideoList from "components/pages/VideoList";
//the mainContent module is responsible for loading up specific a content item, or a list of content items

/**
 * This module contains the pages that get rendered on the scene.
 * A page is not a css overlay, it is rendered on demand. A page can be a main scene page which has a title or it can be a block that gets embedded in other pages.
 * Add pages as you wish by populating more entries on the availablePages object.
 *
 *
 * @param {string} pageId - Which page should we get?
 * @param {array} contentArray - Our content array that's getting passed down to components.
 * @param {string} contentId - If a page is supposed to render a single content item rather than a list of items, pass an id for said item.
 * @param {string} loadMoreResultsAction - Pass down from parent component what action should occur when we try to load more content.
 */
export default (contentArray, pageId, contentId, loadMoreResultsAction, setTitleAction) => {
    let pages = {
        "video-detail": {
            title: "Video Detail",
            component: <VideoDetail contentArray={contentArray} contentId={contentId} setTitleAction={setTitleAction} />
        },
        "video-list": {
            title: "Video List",
            component: <VideoList loadMoreAction={loadMoreResultsAction} contentArray={contentArray} />
        }
    };
    return pages[pageId];
};


