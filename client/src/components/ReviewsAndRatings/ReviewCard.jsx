import React from 'react';

export default function ReviewCard (props) {
  const dateOptions = { weekday: undefined, year: 'numeric', month: 'long', day: 'numeric' };


  return (
    <div className="review-item">
      <h6>{props.review.reviewer_name}, {new Date(props.review.date).toLocaleString(undefined, dateOptions)}</h6>
      <p>Rating: {props.review.rating} stars</p>
      <p style={{'font-weight': 'bold'}}> {props.review.summary}</p>
      <p >Body: {props.review.body}</p>
      <p>Recommend: {props.review.recommend ? "Yes" : "No"}</p>
      <p className='response'>{props.review.response}</p>
      <p>Helpful({props.review.helpfulness})</p>
    </div>
  )

}

