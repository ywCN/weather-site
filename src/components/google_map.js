import React, { Component } from 'react';

class GoogleMap extends Component {
    // this will be called after component is rendered
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return <div ref="map" />
    }
}

export default GoogleMap;
