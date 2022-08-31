import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../config.js';
import ProductContext from './ProductContext.jsx';
import RelatedItemsAndOutfits from './RelatedItemsAndOutfits.jsx';

const ProductDetailPage = () => {
  const [product, setProduct] = useState(65631);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [originalPrice, setPrice] = useState('');
  const [salePrice, setSale] = useState('');
  const [reviews, setReviews] = useState('');
  const [related, setRelated] = useState([]);

  useEffect(() => {
    console.log(product);
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${product}`,
      headers: {
        'Authorization': `${API_KEY}`,
      },
    })
      .then((res) => {
        setName(res.data.name);
        setCategory(res.data.category);
        setDescription(res.data.description);
        setPrice(res.data.default_price);
      })
      .catch((e) => {
        console.error(e);
      });

    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${product}/styles`,
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

    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${product}/related`,
      headers: {
        'Authorization': `${API_KEY}`,
      },
    })
      .then((res) => {
        setRelated(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [product]);
  console.log(related);
  return (
    <div>
      <img src={image} alt="image could not be displayed"></img>
      <div>{name}</div>
      <div>{description}</div>
      <div>{originalPrice}</div>
      <ProductContext.Provider value={{related, product, setProduct}}>
        <RelatedItemsAndOutfits />
      </ProductContext.Provider>
    </div>

  );
}

export default ProductDetailPage;
