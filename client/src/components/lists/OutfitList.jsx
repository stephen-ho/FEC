import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import OutfitListEntry from './entries/OutfitListEntry.jsx';
import AddToOutfits from './entries/AddToOutfits.jsx';


const OutfitList = () => {
  const slideLeft = () => {
    const slider = document.getElementById('slider-outfits');
    slider.scrollLeft = slider.scrollLeft - 275;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider-outfits');
    slider.scrollLeft = slider.scrollLeft + 275;
  };

  return (
    <div className="container outfits" id="slider-outfits">
      <FaArrowLeft className="slide-left" onClick={slideLeft} />
      <AddToOutfits />
      <FaArrowRight className="slide-right" onClick={slideRight} />
    </div>
  );
};

export default OutfitList;
