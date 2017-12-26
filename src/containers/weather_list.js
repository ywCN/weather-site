import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="orange" />
                </td>
            </tr>
        );
    }

    render() {
        return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th>City</th>
                <th>Temperature</th>
                <th>Pressure</th>
                <th>Humidity</th>
            </tr>
            </thead>
            <tbody>
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
