import React from 'react';
import data from './data.js';
import RatingsProductMeta from './RatingsProductMeta.jsx';
import RatingsStarMeta from './RatingsStarMeta.jsx';


export default function Ratings (props) {

console.log("the props for ratings are:,", props)


  return (
    <div className="ratings-container">
     <h2>Ratings & Reviews</h2>
     <RatingsStarMeta reviewMeta={props.reviewMeta}/>
     <RatingsProductMeta />
    </div>
  )

}