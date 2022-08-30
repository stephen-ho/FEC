import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import RelatedListEntry from './entries/RelatedListEntry.jsx';

const RelatedList = () => {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 275;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 275;
  };

  return (
    <div className="container related" id="slider">
      <FaArrowLeft className="slide-left" onClick={slideLeft} />
      <RelatedListEntry />
      <RelatedListEntry />
      <RelatedListEntry />
      <RelatedListEntry />
      <RelatedListEntry />
      <RelatedListEntry />
      <RelatedListEntry />
      <RelatedListEntry />
      <RelatedListEntry />
      <RelatedListEntry />
      <FaArrowRight className="slide-right" onClick={slideRight} />
    </div>
  );
};

export default RelatedList;
