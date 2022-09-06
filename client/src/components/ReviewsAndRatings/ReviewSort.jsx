import React from 'react';
import ReviewCard from './ReviewCard.jsx'
import data from './data.js'



export default function ReviewSort (props) {
//api call
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

