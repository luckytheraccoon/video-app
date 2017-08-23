import React from "react";

/**
 * A simple component that renders a simple "load more" button. 
 * 
 * Its not very customizable, this one is for a single purpose.
 */
export default class LoadMoreButton extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //if the clickAction came through as null, then if we click the button, nothing should happen
        //otherwise, run the action
        if (this.props.clickAction) {
            this.props.clickAction();
        }
    }

    render() {

        //based on wether we can get more results or not, we define the button label
        let label = "Load More Videos";
        let className = "more-results-button";

        if (this.props.clickAction === null) {
            label = "All Videos Loaded";
            className = "more-results-button-no-click";
        }

        return <div className={className} onClick={this.handleClick}>{label}</div>;
    }
}