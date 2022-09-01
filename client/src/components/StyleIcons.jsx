import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import '../../dist/sidebar.css';

const StyleIcons = ({ allStyles, setSelectedStyle }) => {
  console.log("STYLE ICONS RENDER");
  const [ticked, setTicked] = useState();

  useEffect(() => {
    setSelectedStyle(allStyles[0]);
    setTicked(document.getElementsByClassName('checkOverlay')[0]);
  }, [allStyles]);

  const handleOnClick = (event) => {
    for (let i = 0; i < allStyles.length; i += 1) {
      if (allStyles[i].style_id === parseInt(event.target.dataset.id, 10)) {
        setSelectedStyle(allStyles[i]);
        break;
      }
    }

    const clicked = event.target.previousSibling;
    if (clicked.getAttribute('hidden') || clicked.getAttribute('hidden') === ''
    ) {
      ticked?.setAttribute('hidden', true);
      clicked.removeAttribute('hidden');
      setTicked(clicked);
    }
  };

  return allStyles?.map((style) => {
    const jpg = style.photos[0].thumbnail_url;
    return (
      <div key={style.style_id} className="styleIcon">
        <div className="iconContainer">
          <div className="checkOverlay" hidden={!style['default?']}>
            <FontAwesomeIcon icon={faCircleCheck} />
          </div>
          <img
            src={jpg}
            alt={style.name}
            data-id={style.style_id}
            onClick={handleOnClick}
            role="presentation"
          />
        </div>
      </div>
    );
  });
};

export default StyleIcons;
