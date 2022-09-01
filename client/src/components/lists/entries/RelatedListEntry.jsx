import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { FaRegStar } from 'react-icons/fa';
import { getProduct, getStyles, getRelated } from '../../../getHelpers.js';
import ProductContext from '../../ProductContext.jsx';
import AnswerModal from '../../Modal/AnswerModal.jsx'

const {API_KEY} = process.env;

const RelatedListEntry = (props) => {
  const { handleProductChange } = useContext(ProductContext);
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [reviews, setReviews] = useState('');
  const [show, setShow] = useState(false);

  console.log('Related List entry render');

  const newRender = (productID) => {
    console.log('current product id ==>', props.item);
    handleProductChange(productID);
  };

  useEffect(() => {
    getProduct(props.item)
      .then((res) => {
        setCategory(res.data.category);
        setName(res.data.name);
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
    <>
      <AnswerModal onClose={() => setShow(false)} show={show} />
      <div className="entry">
        <FaRegStar className="button compare-outfit" onClick={()=>{setShow(true); console.log(show)}}/>
        <img className="image" src={image} alt="could not be displayed" onClick={() => {newRender(props.item)}}/>
        <h2 className="name">{name}</h2>
        <h4 className="category">{category}</h4>
        <h4 className="price original">{price}</h4>
        <div className="reviews">No reviews</div>
      </div>
    </>

  );
};

export default RelatedListEntry;
