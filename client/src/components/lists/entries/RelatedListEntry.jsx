import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { FaRegStar } from 'react-icons/fa';
import { getProduct, getStyles, getRelated } from '../../../getHelpers.js';
import ProductContext from '../../ProductContext.jsx';

const {API_KEY} = process.env;

const RelatedListEntry = (props) => {
  const { handleProductChange } = useContext(ProductContext);
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [reviews, setReviews] = useState('');

  console.log('Related List entry render');

  const newRender = (productID) => {
    console.log('current product id ==>', props.item);
    handleProductChange(productID);
    // getRelated(productID)
    //   .then((res) => {
    //     setRelated(res.data);
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //   });
  };

  useEffect(() => {
    getProduct(props.item)
      .then((res) => {
        setCategory(res.data.category);
        setDescription(res.data.description);
      })
      .catch((e) => {
        console.error(e);
      });

    getStyles(props.item)
      .then((res) => {
        setImage(res.data.results[0].photos[0].thumbnail_url);
        setPrice(res.data.results[0].original_price);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [props.item]);

  return (
    <div className="entry"
    onClick={() => {newRender(props.item)}}>
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
