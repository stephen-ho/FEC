import React, { useState, useEffect, useContext } from 'react';
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
  useEffect(() => {
    // products
    axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products',
      headers: {
        'Authorization': `${API_KEY}`,
      },
    })
      .then((res) => {
        console.log('products', res.data);
      })
      .catch((e) => {
        console.error(e);
      });

    // product info by id
    axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/65631',
      headers: {
        'Authorization': `${API_KEY}`,
      },
    })
      .then((res) => {
        setCategory(res.data.category);
        setDescription(res.data.description);
      })
      .catch((e) => {
        console.error(e);
      });

    // product styles by id
    axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/65631/styles',
      headers: {
        'Authorization': `${API_KEY}`,
      },
    })
      .then((res) => {
        setImage(res.data.results[0].photos[0].thumbnail_url);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <ProductContext.Provider value={{category, description, image}}>
      <div className="slides">
        <RelatedList />
        <OutfitList />
      </div>
    </ProductContext.Provider>
  );
};

export default RelatedItemsAndOutfits;
