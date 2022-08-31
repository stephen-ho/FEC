import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../../config.js';
import { FaRegStar } from 'react-icons/fa';
import ProductContext from '../../ProductContext.jsx';

const RelatedListEntry = (props) => {
  const { setProduct, product } = useContext(ProductContext);
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [reviews, setReviews] = useState('');

  // product info by id
  useEffect(() => {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${props.item}`,
      headers: {
        'Authorization': `${API_KEY}`,
      },
    })
      .then((res) => {
        console.log(props.item);
        setCategory(res.data.category);
        setDescription(res.data.description);
        // category = res.data.category;
        // description = res.data.description;
      })
      .catch((e) => {
        console.error(e);
      });
    // product styles by id
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${props.item}/styles`,
      headers: {
        'Authorization': `${API_KEY}`,
      },
    })
      .then((res) => {
        setImage(res.data.results[0].photos[0].thumbnail_url);
        setPrice(res.data.results[0].original_price);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div className="entry" onClick={() => {setProduct(props.item); console.log(props.item, product)}}>
      <FaRegStar className="button compare-outfit" />
      <img className="image" src={image} alt="could not be displayed" />
      <h4 className="category">{category}</h4>
      <p className="description">{description}</p>
      <h4 className="price original">{price}</h4>
      <div className="reviews">{reviews}</div>
    </div>
  );
};

export default RelatedListEntry;


