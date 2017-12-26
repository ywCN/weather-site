import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        // take existing function, bind it, and replace the function with a bound version
        // arrow function is a better approach
        // this.onInputChange = this.onInputChange.bind(this); // if not using arrow function, need to bind here
    }

    onInputChange(event) {
        // console.log(event.target.value); // event.target.value is from JavaScript
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();// tells browser no to submit form; to avoid refreshing page
    }

    render() {
        return (
            <form 
                className="input-group"
                onSubmit={this.onFormSubmit}
            >
                <input 
                    placeholder="Get a 5 day forcast in your favorite city"
                    className="form-control"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event)}
                />
                <span className="input-group-btn">
                {/* span is used to wrap a button */}
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}
