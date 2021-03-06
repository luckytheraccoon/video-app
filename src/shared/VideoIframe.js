import React from "react";
import ReactDOM from "react-dom";
import { optimizedResize, canUseDOM } from './common';

/**
 * A component to render an iframe with an external video url.
 */
export default class extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    /**
     * This is so the resize method doesnt error out when an iframe isnt present.
     */
    componentWillUnmount() {
    }

    resize(params) {
        params.videoIframe.width = params.videoIframeParent.offsetWidth;
        params.videoIframe.height = Math.floor(params.videoIframeParent.offsetWidth / 1.77);
        params.videoIframe.parentElement.style.height = params.videoIframe.height + "px";
    }

    /**
     * Call the resize method as soon as an iframe is created, this way it shows up correctly sized immediatly.
     */
    componentDidMount() {
        const resizeCallBackObj = {
            "id":"iframe-resize",
            "method": this.resize,
            "params": {
                "videoIframe": ReactDOM.findDOMNode(this),
                "videoIframeParent": ReactDOM.findDOMNode(this).parentNode
            }
        };
        optimizedResize.add(resizeCallBackObj);
        this.resize(resizeCallBackObj.params);
    }

    render() {
        //we need an extra div to encapsulate the iframe in order to serve
        //as a helper since iframes dont resize dynamically with ease
        //its a workaround for a tricky problem i havent looked too much into
        return (
                <iframe
                    className="iframe--video"
                    src={this.props.videoUrl}
                    frameBorder="0">
                </iframe>
        );
    }
}