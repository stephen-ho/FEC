import React from 'react';
import data from './data.js';
import './ratingsAndReviews.css';
import RatingsStars from './RatingsStars.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-regular-svg-icons';


export default function RatingsStarMeta(props) {
  let count = 0;
  function getAvgRatings() {
    let sum = 0;

    for (const keys in data.reviewMeta.ratings) {
      sum += (data.reviewMeta.ratings[keys] * keys);
      count++;
    }
    return Number(sum / count).toFixed(1);
  }
  const avgRatings = getAvgRatings();

  function getWidth(num) {
    return num ? Number(Math.round((num / count) * 100)) : 0;
  }




  return (
    <div className="ratings-breakdown">
      <span>
        {avgRatings} <RatingsStars stars={2.3}/>

      </span>
      <p>
        5 stars:
        {' '}
        {data.reviewMeta.ratings[5]}
      </p>
      <div className="progress-bar">
        <span className="progress-bar-fill" style={{ width: `${getWidth(data.reviewMeta.ratings[5])}%` }}> </span>
      </div>
      <p>
        4 stars:
        {' '}
        {data.reviewMeta.ratings[4]}
      </p>
      <div className="progress-bar">
        <span className="progress-bar-fill" style={{ width: `${getWidth(data.reviewMeta.ratings[4])}%` }}> </span>
      </div>
      <p>
        3 stars:
        {' '}
        {data.reviewMeta.ratings[3]}
      </p>
      <div className="progress-bar">
        <span className="progress-bar-fill" style={{ width: `${getWidth(data.reviewMeta.ratings[3])}%` }}> </span>
      </div>
      <p>
        2 stars:
        {' '}
        {data.reviewMeta.ratings[2]}
      </p>
      <div className="progress-bar">
        <span className="progress-bar-fill" style={{ width: `${getWidth(data.reviewMeta.ratings[2])}%` }}> </span>
      </div>
      <p>
        1 stars:
        {' '}
        {data.reviewMeta.ratings[1]}
      </p>
      <div className="progress-bar">
        <span className="progress-bar-fill" style={{ width: `${getWidth(data.reviewMeta.ratings[1])}%` }}> </span>
      </div>
    </div>
  );
}
