import React, { useContext, useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { getProduct } from '../../getHelpers.js'
import ProductContext from './../ProductContext.jsx';
import FeaturesContext from './../FeaturesContext.jsx'
import RelatedListEntry from './entries/RelatedListEntry.jsx';
import '/client/dist/Lists.css';

const RelatedList = (props) => {
  const { currentProduct } = useContext(ProductContext);
  const [currentFeatures, setFeatures] = useState([]);

  console.log('window width: ', window.innerWidth)
  // useEffect(() => {
    // getProduct(props.currentProduct)
    // .then((response) => {
    //   console.log('features in the relatedList ==>', response.data.features);
    //   setFeatures(response.data.features.map(item => item.feature))
    // })
    // .catch((e) => {
    //   console.error(e);
    // })
  // }, [currentFeatures])


  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft -= (window.innerWidth/4.625);
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft += (window.innerWidth/4.625);
  };

  return (
    <>
      <h1 className="list-title">Related outfits</h1>
      <div className="container related" id="slider">
        {/* {currentFeatures.length &&
        <FeaturesContext.Provider value={currentFeatures}> */}
          <FaArrowLeft className="slide-left" onClick={slideLeft} />
            {
            props.related.map((item, index) => <RelatedListEntry
            item={item} key={index}/>)
            }
          <FaArrowRight className="slide-right" onClick={slideRight} />
        {/* </FeaturesContext.Provider>
        } */}
      </div>
    </>
  );
}


export default RelatedList;
