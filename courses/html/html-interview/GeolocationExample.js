import React, { Component } from 'react';

class GeolocationExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            error: null,
        };
    }

    componentDidMount() {
        // Check if geolocation is available
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // Get latitude and longitude from the position object
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    this.setState({ latitude, longitude });
                },
                (error) => {
                    // Handle errors
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            this.setState({ error: "User denied the request for geolocation." });
                            break;
                        case error.POSITION_UNAVAILABLE:
                            this.setState({ error: "Location information is unavailable." });
                            break;
                        case error.TIMEOUT:
                            this.setState({ error: "The request to get user location timed out." });
                            break;
                        case error.UNKNOWN_ERROR:
                            this.setState({ error: "An unknown error occurred." });
                            break;
                        default:
                            this.setState({ error: "An error occurred while fetching location." });
                    }
                }
            );
        } else {
            this.setState({ error: "Geolocation is not supported by this browser." });
        }
    }

    render() {
        const { latitude, longitude, error } = this.state;

        return (
            <div>
                <h1>Geolocation Example</h1>
                {error ? (
                    <p>Error: {error}</p>
                ) : (
                    <p>
                        Latitude: {latitude}<br />
                        Longitude: {longitude}
                    </p>
                )}
            </div>
        );
    }
}

export default GeolocationExample;
