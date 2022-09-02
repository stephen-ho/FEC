import React from 'react';
import ReviewCard from './ReviewCard.jsx'
import data from './data.js'
import ReviewSort from './ReviewSort.jsx'


export default function ReviewList () {
const [renderedReviews, setRenderedReviews] = React.useState(1)

const handleReviewCards = data.reviewData.results.map((reviewItem, i) => {
  if (i <= renderedReviews){
    return <div>  <ReviewCard key={reviewItem.review_id}review={reviewItem} /> </div>
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
       <button onClick={addMoreReviews}>More reviews</button>
       <button>Add a review +</button>
    </div>

  )

}

