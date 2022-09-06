import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ZoomableImage from './ZoomableImage.jsx';

console.log('RENDER EXPANDED GALLERY');
const ExpandedViewGallery = ({
  images, index, prev, next, closeExpandedView, styleIndex
}) => {
  console.log("EXPANDED IMAGE INDEX: " + index);
  const handleCloseExpandedView = () => {
    closeExpandedView();
  };

  return (
    <div id="expandedViewGallery">
      <div id="closeExpandedViewButton" onClick={handleCloseExpandedView}> &#10005; </div>
      <div hidden={index === 0}>
        <FaArrowLeft id="expandedPrev" onClick={prev} />
      </div>
      <div hidden={index === images.length - 1}>
        <FaArrowRight id="expandedNext" onClick={next} />
      </div>
      <div id="expandedImageWrapper">
        <ZoomableImage src={images[index]} />
      </div>
    </div>
  );
};

export default ExpandedViewGallery;
