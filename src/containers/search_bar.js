import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
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

// This method make sure that actions created by action creators
// flow down into middleware and then into reducers inside Redux.
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
