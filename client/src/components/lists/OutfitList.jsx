import React, { useState, useContext } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import OutfitListEntry from './entries/OutfitListEntry.jsx';
import AddToOutfits from './entries/AddToOutfits.jsx';


const OutfitList = (props) => {
  const [currentOutfits, setCurrentOutfits] = useState([]);

  const slideLeft = () => {
    const slider = document.getElementById('slider-outfits');
    slider.scrollLeft = slider.scrollLeft - 275;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider-outfits');
    slider.scrollLeft = slider.scrollLeft + 275;
  };

  const handleAddToList = () => {
    if (typeof props.currentProduct === 'object') {
      setCurrentOutfits(currentOutfits => [...currentOutfits, props.currentProduct.id])
      console.log('IS OBJECT')
      console.log(currentOutfits);
    } else {
      setCurrentOutfits(currentOutfits => [...currentOutfits, props.currentOutfits])
      console.log('IS INTEGER')
      console.log(currentOutfits);
    }
  }

  return (
    <>
      <h1>Your outfits</h1>
      <div className="container outfits" id="slider-outfits">
        <FaArrowLeft className="slide-left" onClick={slideLeft} />
        <div onClick={() => {handleAddToList()}}>
          <AddToOutfits />
        </div>
        {currentOutfits.length
        ? currentOutfits.map((outfit, index) => {
            return <OutfitListEntry outfit={outfit} key={index}/>
          })
        : null
        }
        <FaArrowRight className="slide-right" onClick={slideRight} />
      </div>
    </>
  );
};

export default OutfitList;
