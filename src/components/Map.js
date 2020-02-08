import React from 'react';
import GoogleMapReact from 'google-map-react';
import {useState, useEffect} from 'react';

function Map(props) {
  const [locationData, setLocationData] = useState(false);

  const apiKey = "AIzaSyDG3J8HF8sN2K6eDoub3Vsjgh6MM_TMPIc";
  const center = {lat: 37.775, lng: -122.434};
  const zoom = 2;

  useEffect(() => {
    console.log("here");
    fetch('/location.json').then(function(response) {
      response.json().then(dataObj => {
        setLocationData(dataObj);
      });
    });
  }, []);

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{key: apiKey}}
        defaultCenter={center}
        defaultZoom={zoom}
        heatmapLibrary={true}
        heatmap={locationData}
      />
    </div>
  );
}

export default Map;
