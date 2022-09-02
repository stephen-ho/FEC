import React from 'react';
import data from './data.js';
import './ratingsAndReviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-regular-svg-icons';
import {faStar as fullStar, faStarHalf} from '@fortawesome/free-solid-svg-icons';


export default function RatingsStars (props) {
const [stars, setStars] = React.useState([])

function handleStars(num){
  if(num > 5){
    num = 5
  }
  while(num > 0){
    if(num >= 1){
      setStars(prevState => [...prevState, 'fullStar'])
      num--
    }
    else if (num < 1){
      setStars(prevState => [...prevState, 'halfStar'])
      return
    }
  }
}
React.useEffect(() => {
  handleStars(props.stars)
},[]);
console.log('this review has stars equal to:', stars)
//logic to turn iterate through stars and render them

return(
<div className='star-row'>
  <FontAwesomeIcon className='ratings-star' icon={fullStar} />
  <FontAwesomeIcon className='ratings-star' icon={fullStar} />
  <FontAwesomeIcon className='ratings-star' icon={fullStar} />
<span className="fa-layers fa-fw fa-lg ratings-star">
  <FontAwesomeIcon icon={faStar} />
  <FontAwesomeIcon icon={faStarHalf} />
</span>

</div> )

}