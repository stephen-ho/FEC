import React from 'react';

const ProductFeatures = ({ slogan, description, features = [] }) => {
  const handleAccordianClick = (e) => {
    const icon = e.currentTarget.firstElementChild;
    const panel = e.currentTarget.nextElementSibling;
    const sidebar = document.getElementById('sidebarContainer');

    icon.classList.toggle('active');

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  };

  return (
    <div>
      <div id="sloganText">
        {slogan}
      </div>
      <br />
      <div id="descriptionAccordian" onClick={handleAccordianClick}>
        Description
        <div className="accordianIcon" />
      </div>
      <div id="descriptionText">
        {description}
      </div>
      { features.length > 0 ? (
        <>
          <div id="featureAccordian" onClick={handleAccordianClick}>
            Features
            <div className="accordianIcon" />
          </div>
          <ul id="featuresContainer">
            {
      features.map((feature) => (
        <li className="featureText">
          { feature.feature }
          {' '}
          :
          {' '}
          { feature.value }
        </li>
      ))
      }
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default ProductFeatures;
