import React from 'react';
import {Marker} from 'google-map-react';

// CityMarker should have:
// Latitude, Longitude
// Name of City
// Growth Rate

function CityMarker(props) {
  const {lat, lng, name, growth} = props;

  function onMarkerClick(event) {
    console.log(lat, lng, name, growth);
  }

  return (
    <Marker
      onClick={onMarkerClick}
      position={{lat: lat, lng: lng}}
      {...props}
    />
  );

}

export default CityMarker;
