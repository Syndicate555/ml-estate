import React from 'react';
import GoogleMapReact from 'google-map-react';
import {useState, useEffect} from 'react';
import PropertyMarker from './PropertyMarker.js';

function Map(props) {
  const [locationData, setLocationData] = useState(false);
  const [propertyData, setPropertyData] = useState(false);
  const [showPins, setShowPins] = useState(false);

  const apiKey = "AIzaSyDG3J8HF8sN2K6eDoub3Vsjgh6MM_TMPIc";
  const center = {lat: 37.775, lng: -122.434};
  const zoom = 2;

  useEffect(() => {
    // {positions: [], options: {opacity: 0.6, radius: 20}}
    let obj = {positions: [], options: {opacity: 0.6, radius: 25}};
    fetch('/cities.json').then(function(response) {
      response.json().then(cities => {
        cities.forEach(function(cityObj) {
          // {"city": "New York, NY", "lng": -73.3566912, "lat": 40.7412359, "slope": 971.4438835477702}
          const {lat, lng, slope} = cityObj;
          obj.positions.push({lat: lat, lng: lng, weight: slope * 1000000});
        });
        setLocationData(obj);
      });
    });

    fetch('/estates.json').then(function(response) {
      response.json().then(properties => {
        properties.forEach(function(obj, i) {
          obj.key = i;
        });
        setPropertyData(properties);
        console.log(properties);
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
        onClick={() => {
          setShowPins(!showPins);
          document.getElementById('listings').style.display = "inline-block";
        }}
      >
        {
          showPins && propertyData && propertyData.map(({lat, lng, key}) => {
            return <PropertyMarker lat={lat} lng={lng} key={key} />;
          })
        }
      </GoogleMapReact>
    </div>
  );
}

export default Map;
