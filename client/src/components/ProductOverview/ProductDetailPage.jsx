import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar.jsx';
import Gallery from './Gallery.jsx';
import ProductFeatures from './ProductFeatures.jsx';

function ProductDetailPage({ product, allStyles, allPhotos }) {
  console.log('PDP RENDER');
  console.log(product);
  const [currStyle, setStyle] = useState({});
  const [currPhotoSet, setCurrPhotoSet] = useState(allPhotos[0] || {});
  const [expandedView, setExpandedView] = useState(false);

  useEffect(() => {
    console.log('pdp use effect');
    if (product) {
      console.log(product);
      console.log('IN SET BLOCK');
      console.log(allStyles[0]);
      setStyle(allStyles[0]);
      setCurrPhotoSet(allPhotos[allStyles[0].style_id]);
      console.log(currStyle);
    }
  }, [allStyles]);

  const updateStyleImage = (id) => {
    console.log('UPDATE IMAGES TRIGGER');
    console.log(allPhotos[id]);
    setCurrPhotoSet(allPhotos[id]);
  };

  return (
    <div>
      { expandedView ? null
        : (
          <div id="productContainer">
            <div />
            <div id="productMain">
              <Gallery photos={currPhotoSet} product={product} />
              <div id="productFeatures">
                <ProductFeatures
                  slogan={product?.slogan}
                  description={product?.description}
                  features={product?.features}
                />
              </div>
            </div>
            <div id="sidebarContainer">
              <div id="sidebar">
                <Sidebar
                  productName={product?.name}
                  productCategory={product?.category}
                  allStyles={allStyles}
                  updateStyleImage={updateStyleImage}
                />
              </div>
            </div>
            <div />
          </div>
        )}
    </div>
  );
}

export default ProductDetailPage;
