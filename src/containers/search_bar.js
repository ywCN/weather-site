import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    onInputChange(event) {
        console.log(event.target.value); // event.target.value is from JavaScript
    }

    render() {
        return (
            // styles are from bootstrap
            <form className="input-group">
                <input 
                    placeholder="Get a 5 day forcast in your favorite city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                {/* span is used to wrap a button */}
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}
