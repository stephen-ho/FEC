import React from 'react';
import OutfitListEntry from './entries/OutfitListEntry.jsx';
import AddToOutfits from './entries/AddToOutfits.jsx';
import '/client/dist/Lists.css';

const OutfitList = () => {
  // list hardcoded for now
  const outfits = [];
  return (
    <div className="container">
      <AddToOutfits />
      <OutfitListEntry />
      <OutfitListEntry />
      <OutfitListEntry />
      <OutfitListEntry />
    </div>
  );
};

export default OutfitList;
