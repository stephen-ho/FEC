import React from 'react';
import data from './data.js';
import './ratingsAndReviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'


export default function RatingsProductMeta(props) {
  function getWidth(num) {
    return num ? Number(Math.round((num / 5) * 100)) : 0;
  }

  function getProductRatings (num){
    if(num >= 4 ){
      return 'Perfect'
    } else if(num < 4 && num > 3){
      return 'Decent'
    } else {
      return 'Poor'
    }
  }



  return (
    <div className="ratings-products">
      <h3>Characteristics</h3>
      <h4>
        Size
      </h4>
      <div className="progress-bar-product">
        <span className="progress-bar-fill product-highlights-fill tooltip" style={{ width: `${getWidth(data.reviewMeta.characteristics.Size.value)}%` }}> <FontAwesomeIcon icon={faAngleDoubleDown}/>
        <p className='tooltiptext'>{getProductRatings(data.reviewMeta.characteristics.Size.value)}</p>
        </span>
      </div>
      <h4>
        Width
      </h4>
      <div className="progress-bar-product">
        <span className="progress-bar-fill product-highlights-fill tooltip" style={{ width: `${getWidth(data.reviewMeta.characteristics.Width.value)}%` }}> <FontAwesomeIcon icon={faAngleDoubleDown}/>
        <p className='tooltiptext'>{getProductRatings(data.reviewMeta.characteristics.Width.value)}</p>
        </span>
      </div>
      <h4>
        Comfort
      </h4>
      <div className="progress-bar-product">
        <span className="progress-bar-fill product-highlights-fill tooltip" style={{ width: `${getWidth(data.reviewMeta.characteristics.Comfort.value)}%` }}> <FontAwesomeIcon icon={faAngleDoubleDown} />
        <p className='tooltiptext'>{getProductRatings(data.reviewMeta.characteristics.Comfort.value)}</p>
        </span>
      </div>

    </div>
  );
}
