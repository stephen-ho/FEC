import React, { useState, useEffect, useContext, useMemo } from 'react';
import axios from 'axios';
import ProductContext from './ProductContext.jsx';
import OutfitList from './lists/OutfitList.jsx';
import RelatedList from './lists/RelatedList.jsx';
const { API_KEY } = process.env;

const RelatedItemsAndOutfits = () => {

  return (
    // <ProductContext.Provider value={{category, description, image}}>
      <div className="slides">
        <RelatedList />
        <OutfitList />
      </div>
    /* </ProductContext.Provider> */
  );
};

export default RelatedItemsAndOutfits;
