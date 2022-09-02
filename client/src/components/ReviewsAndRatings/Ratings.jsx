import React from 'react';
import data from './data.js';
import RatingsProductMeta from './RatingsProductMeta.jsx';
import RatingsStarMeta from './RatingsStarMeta.jsx';


export default function Ratings (props) {

  return (
    <div className="ratings-container">
     <h2>Ratings</h2>
     <RatingsStarMeta />
     <RatingsProductMeta />
    </div>
  )

}