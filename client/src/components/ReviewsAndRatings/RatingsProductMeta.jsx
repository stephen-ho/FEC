import React from 'react';
import data from './data.js';
import './ratingsAndReviews.css';

export default function RatingsProductMeta(props) {
  function getWidth(num) {
    return num ? Number(Math.round((num / 5) * 100)) : 0;
  }

  return (
    <div className="ratings-products">
      <h3>Characteristics</h3>
      <p>
        Size is a
        {' '}
        {Number(data.reviewMeta.characteristics.Size.value).toFixed(1)}
        /5
      </p>
      <div className="progress-bar">
        <span className="progress-bar-fill product-highlights" style={{ width: `${getWidth(data.reviewMeta.characteristics.Size.value)}%` }}> Replace</span>
      </div>
      <p>
        Width is a
        {' '}
        {Number(data.reviewMeta.characteristics.Width.value).toFixed(1)}
        /5
      </p>
      <div className="progress-bar ">
        <span className="progress-bar-fill product-highlights" style={{ width: `${getWidth(data.reviewMeta.characteristics.Width.value)}%` }}> Replace</span>
      </div>
      <p>
        Comfort is a
        {' '}
        {Number(data.reviewMeta.characteristics.Comfort.value).toFixed(1)}
        /5
      </p>
      <div className="progress-bar">
        <span className="progress-bar-fill product-highlights" style={{ width: `${getWidth(data.reviewMeta.characteristics.Comfort.value)}%` }}> Replace</span>
      </div>
    </div>
  );
}
