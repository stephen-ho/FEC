import React from 'react';
import Ratings from './Ratings.jsx'
import ReviewCard from './ReviewCard.jsx'
import ReviewList from './ReviewList.jsx'
import './ratingsAndReviews.css';
const axios = require('axios');
const {API_KEY} = process.env;



export default function Reviews (props) {
const [reviews, setReviews] = React.useState([])
const [productId, setProductId] = React.useState(65656)

function getReviews (productID) {
  return axios({
   method: 'get',
   url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews?product_id=${productID}`,
   headers: {
     'Authorization': `${API_KEY}`,
   },
 });
};

React.useEffect(() => {
  if(props.product?.id){
  setProductId(props.product?.id)
  }
 getReviews(productId)
 .then(res => {
  setReviews(res.data)
 })
 .catch(err => console.log(err))
}, [])

console.log('the product id is: ', productId)

  return (
    // <div>
    //   <h1>Ratings and Reviews</h1>
    <div className="reviews-container">
      <Ratings />
      <ReviewList reviewData={reviews}/>
    </div>

  )

}

