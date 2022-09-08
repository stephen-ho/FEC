import React from 'react';
import data from './data.js';
import './ratingsAndReviews.css';
import RatingsStars from './RatingsStars.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-regular-svg-icons';


export default function RatingsStarMeta(props) {
  let count = 0;

  function getAvgRatings(obj) {
    let sum = 0;
  console.log('the props for ratings star meta are:', props)
    for (const keys in obj.reviewMeta.ratings) {
      sum += (obj.reviewMeta.ratings[keys] * keys);
      count++;
    }
    return Number(sum / count).toFixed(1);
  }
  let avgRatings = getAvgRatings(data)

  function getWidth(num) {
    return num ? Number(Math.round((num / count) * 100)) : 0;
  }

  // React.useEffect(() => {
  //   if(props){
  //     avgRatings = getAvgRatings(props.reviewMeta)
  //   }
  // }, [props])



  return (
    <div className="ratings-breakdown">
      <span style={{color:'grey', fontSize:'40px'}}>
        {avgRatings} <RatingsStars stars={avgRatings}/>
      </span>
      <p>
        5 stars

        <div className="progress-bar"> <span className="progress-bar-fill" style={{ width: `${getWidth(data.reviewMeta.ratings[5])}%` }}> </span>
      </div>
      </p>

      <p>
        4 stars
        <div className="progress-bar"><span className="progress-bar-fill" style={{ width: `${getWidth(data.reviewMeta.ratings[4])}%` }}></span>
      </div>
      </p>

      <p>
        3 stars

        <div className="progress-bar">
        <span className="progress-bar-fill" style={{ width: `${getWidth(data.reviewMeta.ratings[3])}%` }}> </span>
      </div>
      </p>

      <p>
        2 stars

        <div className="progress-bar">
        <span className="progress-bar-fill" style={{ width: `${getWidth(data.reviewMeta.ratings[2])}%` }}> </span>
      </div>
      </p>
      <p>
        1 star

        <div className="progress-bar" >
        <span className="progress-bar-fill" style={{ width: `${getWidth(data.reviewMeta.ratings[1])}%` }}> </span>
      </div>
      </p>
    </div>
  );
}
