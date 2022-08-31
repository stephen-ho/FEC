import React from 'react';

const ThumbnailCarousel = ({
  index, prev, next, thumbnails = [],
}) => (
  <div>
    <div id="thumbnailGalleryContainer">
      <div id="thumbnailContainer">
        {thumbnails.map((thumbnail) => {
          console.log('THUMBNAIL');
          return (
            <img id="thumbnail" src={thumbnail} alt="" />
          );
        })}
      </div>
    </div>
  </div>
);

export default ThumbnailCarousel;
