import React from 'react';
import data from './data.js'
import './ratingsAndReviews.css';

export default function RatingsStarMeta () {
  let count = 0
function getAvgRatings() {
  let sum = 0

  for(let keys in data.reviewMeta.ratings){
    sum += (data.reviewMeta.ratings[keys] * keys)
    count++
  }
  return Number(sum / count).toFixed(1)
}
let avgRatings = getAvgRatings()

function getWidth (num){
 return num ?  Number(Math.round(( num / count) * 100)) :  0
}


  return (
    <div className="ratings-breakdown">
     <p>{avgRatings} stars is the average</p>
      <p>5 stars: {data.reviewMeta.ratings[5]}</p>
      <div className='progress-bar'>
     <span className="progress-bar-fill" style={{width: `${getWidth(data.reviewMeta.ratings[5])}%`}}> </span>
     </div>
      <p>4 stars: {data.reviewMeta.ratings[4]}</p>
     <div className='progress-bar'>
     <span className="progress-bar-fill" style={{width: `${getWidth(data.reviewMeta.ratings[4])}%`}}> </span>
     </div>
     <p>3 stars: {data.reviewMeta.ratings[3]}</p>
     <div className='progress-bar'>
     <span className="progress-bar-fill" style={{width: `${getWidth(data.reviewMeta.ratings[3])}%`}}> </span>
     </div>
     <p>2 stars: {data.reviewMeta.ratings[2]}</p>
     <div className='progress-bar'>
     <span className="progress-bar-fill" style={{width: `${getWidth(data.reviewMeta.ratings[2])}%`}}> </span>
     </div>
     <p>1 stars: {data.reviewMeta.ratings[1]}</p>
     <div className='progress-bar'>
     <span className="progress-bar-fill" style={{width: `${getWidth(data.reviewMeta.ratings[1])}%`}}> </span>
     </div>
    </div>
  )

}

