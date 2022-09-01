import React from 'react';
import ReviewCard from './ReviewCard.jsx'
import data from './data.js'



export default function ReviewSort () {
//api call


  return (
    <select id="sort" >
        <option value="Relevant">Relevant</option>
        <option value="Newest">Newest</option>
        <option value="Helpful">Helpful</option>
      </select>
  )

}

