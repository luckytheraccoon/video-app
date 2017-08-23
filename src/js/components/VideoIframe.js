import React from "react";
/**
 * A component to render an iframe with an external video url.
 */
export default class extends React.PureComponent {

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
            src={this.serverProtocol + this.props.videoUrl}
            width={this.startingWidth}
            height={this.startingHeight}
            frameBorder={this.frameBorder}>
        </iframe>;
    }
}