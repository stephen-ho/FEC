import React from 'react';
import RatingsStars from './RatingsStars.jsx';
import  {faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function ReviewCard (props) {
  const dateOptions = { weekday: undefined, year: 'numeric', month: 'long', day: 'numeric' };


  return (
    <div className="review-item">
      <h6>{props.review.reviewer_name}, {new Date(props.review.date).toLocaleString(undefined, dateOptions)}</h6>
      <p><RatingsStars stars={props.review.rating}/></p>
      <p style={{'font-weight': 'bold'}}> {props.review.summary}</p>
      <p>{props.review.body}</p>
     {props.review.recommend ? <p> <FontAwesomeIcon icon={faCheck} /> I recommend this product</p> : ''}
      <p className='response'>{props.review.response}</p>
      <p>Helpful({props.review.helpfulness})</p>
    </div>
  )

}

