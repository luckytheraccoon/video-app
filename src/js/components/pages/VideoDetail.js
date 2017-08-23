import React from "react";

import Glyphicon from "components/Glyphicon";
import ListViewLink from "components/ListViewLink";
import VideoIframe from "components/VideoIframe";
/**
 * Video detail page.
 * 
 * Sets the window title according to what video is being viewed.
 */
export default class extends React.PureComponent {

    constructor(props) {
        super(props);
        this.contentData;
    }

    componentWillMount() {
        this.contentData = this.props.contentArray[this.props.contentId];
        this.props.setTitleAction(this.contentData.title);
    }

    render() {
        return (
            <div className="div-content-detail">
                <ListViewLink>
                    <div className="go-back-button">
                        <Glyphicon key="triangle-left" iconSuffix="triangle-left" />
                        Back to Video List
                        </div>
                </ListViewLink>
                <div>
                    <div>
                        <div className="div-iframe-container">
                            <VideoIframe videoUrl={this.contentData.videoUrl} />
                        </div>
                        <div className="title">
                            {this.contentData.title}
                        </div>
                        <div className="description">
                            {this.contentData.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}