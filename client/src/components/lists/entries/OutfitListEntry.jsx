import React from 'react';
import '/client/dist/Lists.css';

const OutfitListEntry = () => {
  return (
    <div className="entry">
      <button className="button remove-outfit">X</button>
      <div className="image">outfit image goes here</div>
      <h3 className="category">Category</h3>
      <h4 className="description">Description... blah blah blah</h4>
      <h4 className="price original">Price</h4>
      <div className="reviews">No reviews</div>
    </div>
  );
};

export default OutfitListEntry;
