import React, { useState } from 'react';

const ZoomableImage = ({ src }) => {
  const [zoomed, setZoomed] = useState('1');
  const [position, setPosition] = useState('50% 50%');
  const styling = {
    backgroundImage: `url(${src})`,
    backgroundPosition: position,
  };
  let isZoomed = zoomed === '0' ? "zoomed" : "notZoomed";

  const zoomInPosition = (e) => {
    const zoomWindow = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - zoomWindow.x;
    const offsetY = e.clientY - zoomWindow.y;
    const x = (offsetX / zoomWindow.width) * 100;
    const y = (offsetY / zoomWindow.height) * 100;
    setPosition(`${x}% ${y}%`);
  };

  const toggleZoom = (e) => {
    if (zoomed === '0') {
      setZoomed('1');
    } else {
      setZoomed('0');
      zoomInPosition(e);
    }
  };

  const handleClick = (e) => {
    toggleZoom(e);
  };

  const handleMouseMove = (e) => {
    if (zoomed === '0') {
      zoomInPosition(e);
    }
  };

  const handleMouseLeave = () => {
    setZoomed('1');
    setPosition('50% 50%');
  };

  return (
    <div
      id="zoomImageWrapper"
      className={isZoomed}
      style={styling}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        id="zoomImage"
        src={src}
        alt=""
        style={{ opacity: zoomed }}
      />
    </div>
  );
};

export default ZoomableImage;
