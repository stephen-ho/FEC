import React from 'react';
import ReviewCard from './ReviewCard.jsx'
import data from './data.js'
import ReviewSort from './ReviewSort.jsx'


export default function ReviewList (props) {
const [renderedReviews, setRenderedReviews] = React.useState(1)
const handleReviewCards = data.reviewData.results.map((reviewItem, i) => {
  if (i <= renderedReviews){
    return <div>  <ReviewCard className='review-item' key={reviewItem.review_id}review={reviewItem} /> </div>
  }
  })

  function addMoreReviews(){
    setRenderedReviews(prevState => prevState + 2)
    handleReviewCards
  }


  return (
    <div className="review-list">
       <h2>{data.reviewData.results.length} reviews, sorted by <ReviewSort /> </h2>
       {handleReviewCards}
       <button className='reviews-btn' onClick={addMoreReviews}>More reviews</button>
       &nbsp;
       <button className='reviews-btn'>Add a review +</button>
    </div>

  )

}

