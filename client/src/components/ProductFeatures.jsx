import React from 'react';

const ProductFeatures = ({ slogan, description, features = [] }) => (
  <div>
    <div id="sloganText">
      {slogan}
    </div>
    <br />
    <div id="descriptionText">
      {description}
    </div>
    <ul>
      {
      features.length > 0 ? features.map((feature) => {
        console.log(features);
        return (
          <li className="featureText">
            { feature.feature }
            {' '}
            :
            {' '}
            { feature.value }
          </li>
        );
      }) : null
      }
    </ul>
  </div>
);

export default ProductFeatures;
