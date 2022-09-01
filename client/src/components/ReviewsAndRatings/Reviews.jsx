import React from 'react';
import Ratings from './Ratings.jsx'
import ReviewCard from './ReviewCard.jsx'
import ReviewList from './ReviewList.jsx'
import './ratingsAndReviews.css';




export default function Reviews () {
  return (
    // <div>
    //   <h1>Ratings and Reviews</h1>
    <div className="reviews-container">
      <Ratings />
      <ReviewList />
    </div>

  )

}

