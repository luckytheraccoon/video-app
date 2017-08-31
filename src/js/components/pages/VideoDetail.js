import React from "react";

import Glyphicon from "components/Glyphicon";
import ListViewLink from "components/ListViewLink";
import VideoIframe from "components/VideoIframe";
import SideVideoList from "components/SideVideoList";
import { getUrlParameter, buildApiUrl } from "helpers/common";
/**
 * Video detail page.
 * 
 * Sets the window title according to what video is being viewed.
 */
export default class extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            videoUrl: null,
            title: null,
            description: null
        }
    }

    componentDidMount() {
        fetch(buildApiUrl(["video", this.props.match.params.id].join("/"))).then(function (response) {
            return response.json();
        }).then(function (response) {
            this.setState({
                videoUrl: response.videoUrl,
                title: response.title,
                description: response.description
            });
        }.bind(this));
    }

    render() {
        return (
            <div className="div-content-detail">
                <div className="div-content-video">
                    <ListViewLink>
                        <div className="go-back-button">
                            <Glyphicon key="triangle-left" iconSuffix="triangle-left" />
                            Back to Video List
                        </div>
                    </ListViewLink>
                    <div>
                        <div>
                            <div className="div-iframe-container">
                                <VideoIframe videoUrl={this.state.videoUrl} />
                            </div>
                            <div className="title">
                                {this.state.title}
                            </div>
                            <div className="description">
                                {this.state.description}
                            </div>
                        </div>
                    </div>
                </div>
                <SideVideoList />
            </div>
        );
    }
}