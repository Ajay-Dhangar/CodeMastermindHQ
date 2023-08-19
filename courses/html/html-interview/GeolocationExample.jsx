import React, { useState, useEffect } from 'react';

const GeolocationExample = () => {
  const [locationInfo, setLocationInfo] = useState('Getting your location...');

  useEffect(() => {
    // Check if the browser supports Geolocation API
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        setLocationInfo(`Latitude: ${latitude}, Longitude: ${longitude}`);
      }, function(error) {
        setLocationInfo(`Error getting location: ${error.message}`);
      });
    } else {
      setLocationInfo('Geolocation not supported by your browser');
    }
  }, []);

  return (
    <div>
      <h1>Your Current Location</h1>
      <p id="location">{locationInfo}</p>
    </div>
  );
};

export default GeolocationExample;
