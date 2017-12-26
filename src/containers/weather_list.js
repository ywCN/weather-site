import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    renderWeather(cityData) {
        console.log('data:', cityData);
        return (
            <tr>
                <td>{cityData.city.name}</td>
            </tr>
        );
    }

    render() {
        console.log(this.props.weather);
        return (
            <table className="table table-hover">
            {/* thead is table head */}
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {/* for each city, do this renderWeather callback function */}
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// inject weather into this as props, 
// so can access it by using this.props.weather
// function mapStateToProps(state) {
//     return { weather: state.weather };
// }

// ES6 version of same function
function mapStateToProps({ weather }) {
    // return { weather: weather };
    return { weather }; // ES6, since key value are same
}

export default connect(mapStateToProps)(WeatherList);
