import React from 'react';

const ImageCarousel = ({
  images = [], index, prev, next,
}) => {
  console.log('IMAGE CAROUSEL');
  console.log(images);
  const imageGallery = {
    height: '100%',
    position: 'relative',
  };

  const currentImage = {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
  };

  return (
    <div>
      <div>
        <div id="imageGalleryArrows">
          <div id="imageGalleryPrev" onClick={prev} hidden={index === 0}>
            &lt;
          </div>
          <div id="imageGalleryNext" onClick={next} hidden={index === images.length - 1}>
            &gt;
          </div>
        </div>
        <div id="imageGallery" style={imageGallery}>
          <img src={images[index]} alt="trash" style={currentImage} />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
