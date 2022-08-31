import React, { useState, useEffect } from 'react';
import ImageCarousel from './ImageCarousel.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';

const Gallery = ({ product, photos = [] }) => {
  console.log('GALLERY RENDER');

  const [imageIndex, setImageIndex] = useState(0);
  const thumbnails = [];
  const images = [];

  useEffect(() => {
    setImageIndex(0);
  }, [product]);

  const prev = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  const next = () => {
    if (imageIndex < photos.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };

  for (let i = 0; i < photos.length; i += 1) {
    thumbnails.push(photos[i].thumbnail_url);
    images.push(photos[i].url);
  }

  return photos.length > 0 ? (
    <div>
      <div>
        <div id="galleryContainer">
          <div id="thumbnailCarouselContainer">
            <ThumbnailCarousel
              thumbnails={thumbnails}
              index={imageIndex}
              prev={prev}
              next={next}
            />
          </div>
          <div id="imageCarouselContainer">
            <ImageCarousel
              images={images}
              index={imageIndex}
              prev={prev}
              next={next}
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Gallery;
