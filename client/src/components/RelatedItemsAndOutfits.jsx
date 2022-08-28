import React from 'react';
import OutfitList from './lists/OutfitList.jsx';
import RelatedList from './lists/RelatedList.jsx';

const RelatedItemsAndOutfits = () => {
  return (
    <div className="slides">
      <RelatedList />
      <OutfitList />
    </div>
  );
};

export default RelatedItemsAndOutfits;
