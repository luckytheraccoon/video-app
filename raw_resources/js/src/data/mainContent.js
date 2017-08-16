/**
 * This is used to "white-list" content information and to get it from a globally accessible constant array.
 */
export default (contentArray, contentId) => {
    if(!contentArray) {
        return {};
    }

    var contentToShow;
    if(contentArray[contentId]) {
        contentToShow = contentArray[contentId];
        return {
            index: contentToShow.index,
            id: contentToShow.id,
            title: contentToShow.title,
            description: contentToShow.description,
            thumbnailMedium: contentToShow.thumbnails.medium.url,
            thumbnailLarge: contentToShow.thumbnails.large.url,
            videoUrl: contentToShow.video_embed
        };
    }
};