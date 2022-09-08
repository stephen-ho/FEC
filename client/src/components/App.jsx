import React, { useState, useEffect, useMemo } from 'react';
import ProductDetailPage from './ProductOverview/ProductDetailPage.jsx';
import RelatedAndOutfits from './RelatedAndOutfits.jsx';
import QuestionList from './QA/QuestionList.jsx';
import AnswerList from './QA/AnswerList.jsx';
import QuestionModal from './Modal/QuestionModal.jsx';
import Reviews from './ReviewsAndRatings/Reviews.jsx';
import Interactions from './Interactions.jsx';
import './QA/QA.css';

const axios = require('axios');

const { API_URL } = process.env;
const header = { Authorization: process.env.API_KEY };

function App() {
  const [allProducts, setAllProducts] = useState({});
  const [product, setProduct] = useState(null);
  const [allStyles, setAllStyles] = useState([]);
  const [defaultPhoto, setDefaultPhoto] = useState('');
  const [photos, setPhotos] = useState({});
  const [related, setRelated] = useState([]);
  const [search, setSearch] = useState('');
  const [features, setFeatures] = useState([]);
  const [show, setShow] = useState(false);

  // get all produts for initial loading
  useEffect(() => {
    axios.get(`${API_URL}/products`, { headers: header })
      .then((response) => {
        const productMap = {};
        response.data.forEach((item) => {
          productMap[item.id] = item;
        });
        setAllProducts(productMap);
        return response.data;
      })
      .then((data) => {
        // temp way to set initial product until catalog page
        axios.get(`${API_URL}/products/${data[0].id}`, { headers: header })
          .then((response) => {
            setProduct(response.data);
            console.log('PRODUCT UPDATED TO: ', response.data);
            // return data;
          });
      });
  }, []);

  // trigger updates when product is changed
  useEffect(() => {
    console.log('PRODUCT CHANGE TRIGGERED');
    console.log(product);
    if (product) {
      console.log('product exists');
      axios.get(`${API_URL}/products/${product.id}/styles`, { headers: header })
        .then((response) => {
          setAllStyles(response.data.results);
          setDefaultPhoto(response.data.results[0].photos[0].thumbnail_url);
          return response.data.results;
        })
        .then((data) => {
          const pics = {};
          data.forEach((style) => {
            pics[style.style_id] = style.photos;
          });
          setPhotos(pics);
        })
        .then(() => {
          axios.get(`${API_URL}/products/${product.id}/related`, { headers: header })
            .then((response) => {
              setRelated(response.data);
            });
        });
      console.log('B I G console log ==============');
      console.log('product ==>', product);
      console.log('allStyles ==> ', allStyles);
      console.log('defaultPhoto ==>', defaultPhoto);
      console.log('photos ==> ', photos);
      console.log('related ==> ', related);
      console.log('search ==> ', search);
      console.log('show ==> ', show);
      console.log('features ==>', features);
      console.log('================================');
    }
  }, [product]);

  // trigger for product change in other components
  const handleProductChange = (productId) => {
    console.log("PRODUCT CHANGE HANDLER");
    axios.get(`${API_URL}/products/${productId}`, { headers: header })
      .then((response) => {
        setProduct(response.data);
      });
  };

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (product) ? (
    <Interactions>
      <ProductDetailPage
        related={related}
        product={product}
        allStyles={allStyles}
        allPhotos={photos}
      />
      <RelatedAndOutfits
        related={related}
        handleProductChange={handleProductChange}
        currentProduct={product?.id}
        product={product}
      />
      <QuestionList product={product} key={product?.id} />
      <Reviews product={product} />
    </Interactions>
  ) : null;
}

export default App;
