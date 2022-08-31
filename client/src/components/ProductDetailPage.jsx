import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { API_KEY } from '../config.js';
import { getProduct, getStyles, getRelated } from '../getHelpers.js';
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
    getProduct(product)
      .then((res) => {
        setName(res.data.name);
        setCategory(res.data.category);
        setDescription(res.data.description);
        setPrice(res.data.default_price);
      })
      .catch((e) => {
        console.error(e);
      });

    getStyles(product)
      .then((res) => {
        setImage(res.data.results[0].photos[0].thumbnail_url);
      })
      .catch((e) => {
        console.error(e);
      });

    getRelated(product)
      .then((res) => {
        setRelated(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [product]);

  // const renderRelated = useCallback(())
  // const renderProduct = useCallback(())
  const productValue = useMemo(() => { return product }, [product]);
  const relatedValues = useMemo(() => { return related }, [related]);
  return (
    <div>
      <img src={image} alt="image could not be displayed"></img>
      <div>{name}</div>
      <div>{description}</div>
      <div>{originalPrice}</div>
      <ProductContext.Provider value={{ relatedValues, setRelated, productValue, setProduct }}>
        <RelatedItemsAndOutfits />
      </ProductContext.Provider>
    </div>

  );
};

export default ProductDetailPage;
