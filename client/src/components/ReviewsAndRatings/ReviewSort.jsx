import React from 'react';
import ReviewCard from './ReviewCard.jsx'
import data from './data.js'
const axios = require('axios');
const {API_KEY} = process.env;



export default function ReviewSort (props) {

function sortReviews (productID, order) {
  return axios({
   method: 'get',
   url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews?product_id=${productID}&sort=${order}`,
   headers: {
     'Authorization': `${API_KEY}`,
   },
 });
};


const [sortOrder, setSortOrder] = React.useState('relevant')

function handleSort (e) {
  setSortOrder(e.target.value)
}

  return (
    <select  id="sort" onChange={handleSort}>
        <option className='sort-dropdown-content' value="Relevant">Relevant</option>
        <option  value="Newest">Newest</option>
        <option value="Helpful">Helpful</option>
      </select>
  )

}

