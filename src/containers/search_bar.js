import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
        return (
            // styles are from bootstrap
            <form className="input-group">
                <input />
                <span className="input-group-btn">
                {/* span is used to wrap a button */}
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}
