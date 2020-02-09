import React from 'react';
import './App.css';
import Map from './components/Map.js';
import Listings from './components/Listings.js';
import Header from './components/Header.js';

function App() {

  return (
    <div id="main">
      <Header id="header" />
      <div className="map-and-listings">
        <Map id="map" />
        <Listings id="listings"/>
      </div>
    </div>
  );
}

export default App;
