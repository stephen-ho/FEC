import React, { useState, useEffect, useContext, useMemo } from 'react';
import axios from 'axios';
import ProductContext from './ProductContext.jsx';
import OutfitList from './lists/OutfitList.jsx';
import RelatedList from './lists/RelatedList.jsx';
import { API_KEY } from '../config.js';

const RelatedItemsAndOutfits = () => {
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [reviews, setReviews] = useState('');


  return (
    // <ProductContext.Provider value={{category, description, image}}>
      <div className="slides">
        <RelatedList />
        <OutfitList />
      </div>
    /* </ProductContext.Provider> */
  );
};

export default RelatedItemsAndOutfits;
