import React, { useState } from 'react';
import PicModal from '../Modal/PicModal.jsx';

function PhotoItem({ photo }) {

  const [show, setShow] = useState(false);


  function handlePic() {
    setShow(true);
  }

  return (
    <>
      <PicModal onClose={() => setShow(false)} show={show} photo={photo} />
      <div>
        <img className="answerPic" src={photo.url} onClick={handlePic} />
      </div>
    </>
  );
}

export default PhotoItem;