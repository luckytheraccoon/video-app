import React from "react";
import Main from '../Main';
import Glyphicon from "../Glyphicon";
import ListViewLink from "../ListViewLink";
import VideoIframe from "../VideoIframe";
import ItemThumbnailList from "../ItemThumbnailList";
import { buildApiUrl } from "../common";
/**
 * Video detail page.
 * 
 * Sets the window title according to what video is being viewed.
 */
export default class extends React.PureComponent {

    constructor(props) {
        super(props);
        this.fetchVideo = this.fetchVideo.bind(this);
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

    componentDidUpdate(prevProps) {
        const oldV = prevProps.match.params.id,
            newV = this.props.match.params.id;
        if (newV !== oldV) {
            this.fetchVideo();
        }
    }

    render() {
        return (
            <Main className="div--item-detail">
                <div className="div--item-wrapper">
                    <ListViewLink>
                        <div className="div--go-back-button">
                            <Glyphicon key="triangle-left" iconSuffix="triangle-left" />
                            Back to Video List
                        </div>
                    </ListViewLink>
                    <div>
                        <div>
                            <VideoIframe videoUrl={this.state.videoUrl} />
                        </div>
                        <div className="div--item-title">
                            {this.state.title}
                        </div>
                        <div className="div--item-description">
                            {this.state.description}
                        </div>
                    </div>
                </div>
                <ItemThumbnailList apiRoute="videos" currItem={this.props.match.params.id} />
            </Main>
        );
    }
}