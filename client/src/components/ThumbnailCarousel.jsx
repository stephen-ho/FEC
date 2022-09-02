import React, { useState, useEffect } from 'react';

const ThumbnailCarousel = ({
  index, prev, next, handleThumbnailClick, thumbnails = [],
}) => {
  // TEST RMEOVE LATER
  thumbnails = thumbnails.concat(thumbnails);

  // const [highlighted, setHighlighted] = useState({});
  // const [thumbnailIndex, setThumbnail]

  // useEffect(() => {
  // }, []);

  return (
    <div>
      <div id="thumbnailGalleryContainer">
        <div id="thumbnailPrev" onClick={() => {}}>
          &#8963;
        </div>
        <div id="thumbnailContainer">
          {thumbnails.map((thumbnail, idx) => (
            <img className="thumbnailImage" src={thumbnail} alt="" data-id={idx} onClick={(e) => handleThumbnailClick(e.target.dataset.id)} />
          ))}
        </div>
        <div id="thumbnailNext" onClick={() => {}}>
          &#8964;
        </div>
      </div>
    </div>
  );
};

export default ThumbnailCarousel;
