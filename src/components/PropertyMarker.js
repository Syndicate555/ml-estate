import React from 'react';
import Marker from 'google-map-react';

// Property Marker should have:
// Longitude, Latitude
// Exact Address
// Price
// Image?

function PropertyMarker(props) {
  const {lng, lat, address, price, imageURL} = props;

  function onMarkerClick(event) {
    console.log(lng, lat, address, price, imageURL);
  }

  return (
    <Marker
      onClick={onMarkerClick}
      position={{lat: lat, lng: lng}}
    />
  );
}

export default PropertyMarker;
