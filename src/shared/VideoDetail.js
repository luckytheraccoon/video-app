import React from "react";

import Glyphicon from "./Glyphicon";
import ListViewLink from "./ListViewLink";
import VideoIframe from "./VideoIframe";
import SideVideoList from "./SideVideoList";
import { buildApiUrl } from "./common";
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

    fetchVideo() {
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

    componentDidMount() {
        this.fetchVideo();
    }

    componentDidUpdate (prevProps) {
        const oldV = prevProps.match.params.id, 
              newV = this.props.match.params.id;
        if (newV !== oldV) {
            this.fetchVideo();
        }
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
                <SideVideoList currVideo={this.props.match.params.id} />
            </div>
        );
    }
}