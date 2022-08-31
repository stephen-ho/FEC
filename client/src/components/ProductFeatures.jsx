import React from 'react';

const ProductFeatures = ({ slogan, description, features = [] }) => (
  <div>
    <div>
      {slogan}
    </div>
    <br />
    <div>
      {description}
    </div>
    <ul>
      {
      features.length > 0 ? features.map((feature) => {
        console.log(features);
        return (
          <li>
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
