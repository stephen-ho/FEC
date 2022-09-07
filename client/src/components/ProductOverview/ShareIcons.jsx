import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

const ShareIcons = ({
  url, productCategory, productName, style,
}) => (
  <div>
    <div id="shareText">
      share
    </div>
    <div id="shareIconContainer">
      <a className="shareIcon" href={`https://www.facebook.com/sharer.php?u=${url}`} target="popup" onClick={() => window.open(`https://www.facebook.com/sharer.php?u=${url}`, 'popup', 'height=600,width=400')}>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a className="shareIcon" href={`https://twitter.com/share?url=${url}&text=${productName}&hashtags=${productCategory}`} target="popup" onClick={() => window.open(`https://twitter.com/share?url=${url}&text=${productName}&hashtags=${productCategory}`, '_blank', 'height=600,width=400')}>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a className="shareIcon" href={style.photos ? `https://pinterest.com/pin/create/bookmarklet/?media=${style?.photos[0].thumbnail_url}&url=${url}&is_video=${false}&description=${productCategory}-${productName}` : ''} target="popup" onClick={() => window.open(`https://pinterest.com/pin/create/bookmarklet/?media=${style?.photos[0].thumbnail_url}&url=${url}&is_video=${false}&description=${productCategory}-${productName}`, '_blank', 'height=600,width=400')}>
        <FontAwesomeIcon icon={faPinterest} />
      </a>
    </div>
  </div>
);

export default ShareIcons;
