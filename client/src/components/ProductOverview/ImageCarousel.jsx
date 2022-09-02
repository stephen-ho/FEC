import React from 'react';

const ImageCarousel = ({
  images = [], index, prev, next,
}) => {
  console.log('IMAGE CAROUSEL');

  return (
    <div id="imageGalleryContainer">
      <div id="imageGalleryPrev" onClick={prev} hidden={index === 0}>
        &#8249;
      </div>
      <div id="imageGalleryNext" onClick={next} hidden={index === images.length - 1}>
        &#8250;
      </div>
      <div id="imageGallery">
        <img id="galleryImage" src={images[index]} alt="" />
      </div>
    </div>
  );
};

export default ImageCarousel;
