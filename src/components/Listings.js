import React from 'react';
import house from "./house_item.png";


function Listings() {
  return (
    <div className="listings" id="listings">
      <div className="service-list">
        <a href="http://localhost:3000/"><img src={house} alt="icon" className="alignnone size-full wp-image-156 listing-image" /></a>

        <div>
        <h1>15924 97th St</h1>
        <h3>$799,000</h3>
        </div>
    </div>

    <div className="service-list">
        <a href="http://localhost:3000/"><img src={house} alt="icon" className="alignnone size-full wp-image-156 listing-image" /></a>

        <div>
        <h1>1670 Longfellow Ave</h1>
        <h3>$140,000</h3>
        </div>
    </div>
    </div>
  );
}

export default Listings;

