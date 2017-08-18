import React from "react";
//the mainContent module is responsible for loading up specific a content item, or a list of content items
import fetchContent from "../data/mainContent";
/**
 * I prefer to keep some general components stashed in a single so I don't overuse imports too much.
 */

/**
 * This renders a content item's details when being listed. 
 * 
 * Uses a switch to decide on particular details before actually rendering.
 * 
 * @param {object} props - The component properties from within the react context.
 */
function ContentItemList(props) {

    let content = props.contentData;
    let thumbnailClass;
    
    //its possible to limit the amount of characters on a title or description this way
    let title = content.title.substring(0,35) + "...";
    let description = content.description.substring(0,55) + "...";
    
    switch(props.pageId) {
        case "video-list":
            thumbnailClass = "thumbnail-large";
            break;
        case "side-video-list":
            thumbnailClass = "thumbnail-medium";
            break;
    }
     
    return (
        <div id={"content_"+content.index}>
            <div className={thumbnailClass}>
                <DetailViewLink contentId={content.id}>
                    <img src={content.thumbnail} />
                </DetailViewLink>
            </div>
            <div className="title">
                <DetailViewLink contentId={content.id}>
                    {title}
                </DetailViewLink>
            </div>            
            <div className="description">
                {description}
            </div>
        </div>
    );
}

/** 
* This is cheating react, i know... but i feel like performance-wise this is a better idea instead of 
* rellying on state changes on window-resize...!
*/
var iframeComponentId;
window.onresize = function() {
    if(typeof iframeComponentId != "undefined") {
        let videoIframe = document.getElementById(iframeComponentId);
        videoIframe.width = videoIframe.parentElement.parentElement.offsetWidth;
        videoIframe.height = Math.floor(videoIframe.width / 1.77);
        videoIframe.parentElement.style.height = videoIframe.height + "px";
    }
}
/**
 * A component to render an iframe with an external video url.
 */
class VideoIframe extends React.PureComponent {

    constructor(props) {
        super(props);

        //multiple details related to the iframe HTML element are defined here
        this.compId = "video-iframe";
        this.compClass = this.compId;
        this.serverProtocol = "https:";
        this.startingWidth = 0;
        this.startingHeight = 0;
        this.frameBorder = 0;
    }

    /**
     * This feeds the resize window method a iframe id to resize based on window size.
     */
    componentWillMount() {
        iframeComponentId = this.compId;
    }

    /**
     * This is so the resize method doesnt error out when an iframe isnt present.
     */
    componentWillUnmount() {
        iframeComponentId = null;
    }

    /**
     * Call the resize method as soon as an iframe is created, this way it shows up correctly sized immediatly.
     */
    componentDidMount() {
        window.onresize();
    }

    render() {
        return <iframe 
                    id={this.compId} 
                    className={this.compClass} 
                    src={this.serverProtocol+this.props.videoUrl} 
                    width={this.startingWidth} 
                    height={this.startingHeight} 
                    frameBorder={this.frameBorder}>
               </iframe>;
    }
}
/**
 * A simple component that renders the detail view of a item.
 * 
 * @param {object} props - The component properties from within the react context.
 */
function ContentItemDetail(props) {

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
/**
 * A simple component that renders a simple "load more" button. 
 * 
 * Its not very customizable, this one is for a single purpose.
 */
class LoadMoreButton extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        //if the clickAction came through as null, then if we click the button, nothing should happen
        //otherwise, run the action
        if(this.props.clickAction) {
            this.props.clickAction();
        }
    }

    render() {

        //based on wether we can get more results or not, we define the button label
        let label = "Load More Videos";
        let className = "more-results-button";

        if(this.props.clickAction === null) {
            label = "All Videos Loaded" ;
            className = "more-results-button-no-click";
        }

        return <div className={className} onClick={this.handleClick}>{label}</div>;
    }
}

/**
 * This is a simple icon that can have a callback attached to it for all your needs.
 * Granted, the callback system right now is not fully developed, it could be more robust, as you can see the callback takes a pre-defined stack of parameters.
 * To-Do: Make use of spread or some other way to allow for truly flexible callbacks.
 */
class Glyphicon extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        if(this.props.clickAction) {
            this.props.clickAction(this.props.target, this.props.pageTitle, this.props.contentId);
        }
    }

    render() {
        return <span onClick={this.handleClick} className={"glyphicon glyphicon-" + this.props.iconSuffix} >{this.props.children}</span>;
    }
}
/**
 * Just a link that will send the user to the video list.
 * 
 * @param {object} props - The component properties from within the react context.
 */
function ListViewLink(props) {
    return <a href="?videos">{props.children}</a>;
}

/**
 * Just a link that will send the user to the video detail.
 * 
 * @param {object} props - The component properties from within the react context.
 */
function DetailViewLink(props) {
    return <a href={"?video="+props.contentId}>{props.children}</a>;
}



/**
 * Video detail page.
 * 
 * Sets the window title according to what video is being viewed.
 */
class VideoDetail extends React.PureComponent {

    constructor(props) {
        super(props);
        this.contentData;
    }

    componentWillMount() {
        this.contentData = fetchContent(this.props.contentArray, this.props.contentId);
        this.props.setTitleAction(this.contentData.title);
    }

    render() {
        return(
            <div className="div-content-detail">
                <ListViewLink>
                    <div className="go-back-button">
                        <Glyphicon key="triangle-left" iconSuffix="triangle-left"  />
                        Back to Video List
                    </div>
                </ListViewLink>
                <div>
                    <ContentItemDetail contentData={this.contentData}  />
                </div>
            </div>
        );
    }
}

/**
 * Video list page.
 * @param {object} props - The component properties from within the react context.
 */
function VideoList(props) {

    //this will return null if we can't actually load more
    let loadMoreAction = props.loadMoreAction();

    let pageComponents = [];

    //get each content item and call a component to render it
    for(var key in props.contentArray) {
        if(props.contentArray.hasOwnProperty(key)) {
            pageComponents.push(
                <ContentItemList 
                    pageId="video-list" 
                    key={key} 
                    contentData={fetchContent(props.contentArray, key)} 
                />
            );
        }
    }

    return(
        <div className="div-content-list">
            {pageComponents}
            <LoadMoreButton clickAction={loadMoreAction} />
        </div>
    );
}


/**
 * Side Video list block, not an actual page, just a block that is embedded within other pages.
 * @param {object} props - The component properties from within the react context.
 */
function SideVideoList(props) {

    //this will return null if we can't actually load more
    let loadMoreAction = props.loadMoreAction();
    
    let pageComponents = [];
    
    //get each content item and call a component to render it, dont display the current item in detail view
    for(var key in props.contentArray) {
        if(props.contentArray.hasOwnProperty(key)) {
            if(key !== props.contentId) {
                pageComponents.push(<ContentItemList pageId="side-video-list" key={key} contentData={fetchContent(props.contentArray, key)} />);
            }
        }
    }

    return(
        <div className="div-side-content-list">
            {pageComponents}
            <LoadMoreButton clickAction={loadMoreAction} />
        </div>
    );
}

export { VideoList,  Glyphicon, ListViewLink, VideoDetail, SideVideoList };