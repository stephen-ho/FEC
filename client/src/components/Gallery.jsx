import React from 'react';

const Gallery = ({ photos = [] }) => {
  console.log('GALLERY RENDER');
  console.log(photos);

  return photos.length > 0 ? (
    <div>
      <div>
        <div>
          container div
          <div>
            {photos.map((photo) => <img src={photo.thumbnail_url} alt={photo.url} />)}
          </div>
          <div>
            {photos.map((photo) => <img src={photo.url} alt={photo.thumbnail_url} />)}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Gallery;
