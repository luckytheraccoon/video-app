import React from "react";
/**
 * Component that renders the search form.
 * Invokes ManContainer callback on submit.
 */
export default class extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {value: ''};
    }

    /**
     * Keep the search box content in state for usage.
     * 
     * @param {object} event - Event info.
     */
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    /**
     * Whenever the form is submitted, don't actually refresh the page and call a MainContainer callback.
     * 
     * @param {object} event - Event info.
     */
    handleSubmit(event) {
        this.props.onSubmit(this.state.value, false, true);
        event.preventDefault();
    }

    render() {
        return(
            <form className={"div-search-form " + this.props.className} onSubmit={this.handleSubmit}>
                <input className="search-box" type="text" value={this.state.value} onChange={this.handleChange} placeholder="What are you looking for?"/>
                <input className="submit-button" type="submit" value="Search" />
            </form>
        );
    }
}