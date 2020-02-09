import React from 'react';
import './App.css';
import Map from './components/Map.js';
import Listings from './components/Listings.js';
import Header from './components/Header.js';
import Introduction from './components/Introduction.js';
import Team from './components/Team.js';
import Cards from './components/Cards.js';
import TeamIntro from './components/TeamIntro';

function App() {

  return (
    <div id="main">
      <Header id="header" />
      <Introduction/>
      <br>
      </br>
      <div className="map-and-listings">
        <Map id="map" />
        <Listings id="listings"/>
      </div>
      <TeamIntro/>
      <br>
      </br>
      <Cards/>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <Team/>
    </div>
  );
}

export default App;
