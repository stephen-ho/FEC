import React from 'react';
import FontAwesomeIcon from '@fortawesome/fontawesome-free';

const RelatedListEntry = () => {
  return (
    <div className="entry">
      <button className="button compare-outfit">star</button>
      <div className="image">product image goes here</div>
      <h3 className="category">Category</h3>
      <h4 className="description">Description... blah blah blah</h4>
      <h4 className="price original">Price</h4>
      <div className="reviews">No reviews</div>
    </div>
  );
};

export default RelatedListEntry;
