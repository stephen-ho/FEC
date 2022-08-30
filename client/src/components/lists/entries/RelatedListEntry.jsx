import React, { useState, useContext } from 'react';
import { FaRegStar } from 'react-icons/fa';
import ProductContext from '../../ProductContext.jsx';

const RelatedListEntry = () => {
  const { image, category, description } = useContext(ProductContext);
  return (
    <div className="entry">
      {/* <button className="button compare-outfit">star</button> */}
      {/* <i className="fa-solid fa-star-sharp button compare-outfit" /> */}
      <FaRegStar className="button compare-outfit" />
      <img className="image" src={image} alt="could not be displayed" />
      <h4 className="category">{category}</h4>
      <p className="description">{description}</p>
      <h4 className="price original">Price</h4>
      <div className="reviews">No reviews</div>
    </div>
  );
};

export default RelatedListEntry;
