import React, {useState, useContext} from 'react';
import ProductContext from '../../ProductContext.jsx';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import '/client/dist/Lists.css';

const OutfitListEntry = () => {
  // const { productValue } = useContext(ProductContext);
  return (
    <div className="entry">
      <FaTimes className="button compare-outfit" />
      <img className="image" src="image" alt="could not be displayed" />
      <h4 className="category">category</h4>
      <p className="description">description</p>
      <h4 className="price original">Price</h4>
      <div className="reviews">No reviews</div>
    </div>
  );
};

export default OutfitListEntry;
