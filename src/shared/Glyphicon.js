import React from "react";

/**
 * This is a simple icon that can have a callback attached to it for all your needs.
 * Granted, the callback system right now is not fully developed, it could be more robust, as you can see the callback takes a pre-defined stack of parameters.
 * To-Do: Make use of spread or some other way to allow for truly flexible callbacks.
 */
export default class extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.clickAction) {
            this.props.clickAction(this.props.target, this.props.pageTitle, this.props.contentId);
        }
    }

    render() {
        return <span onClick={this.handleClick} className={"glyphicon glyphicon-" + this.props.iconSuffix} >{this.props.children}</span>;
    }
}