import React, { useState } from 'react';
import './QA.css';
import PhotoItem from './PhotoItem.jsx';

function AnswerItem({ answer }) {

  const [report, setReport] = useState(false);
  const [helpful, setHelpful] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [show, setShow] = useState(false);

  function handleHelpful() {
    console.log('Add 1 to helpfulness');
    setHelpful(!helpful);
  }

  function handleReport() {
    console.log('Reported');
    setReport(!report);
  }

  // answer.photos is an array of photo objects
    // need answer.photos[i].url to render
  const allPhotos = answer.photos.map((photo, index) => {
    return (<PhotoItem key={index} photo={photo} />);
  });

  return (
    <div className="AnswerItem">
      <h4>A: {answer.body} </h4>
      <div className="answerInfo">
        <div className="postInfo">
          <p>By: {answer.answerer_name} on {answer.date}</p>
        </div>
        <div id={helpful ? 'helpTrue' : 'helpFalse'} className="clickable helpful" onClick={handleHelpful}>
          <p>Helpful?</p>
          <p>Yes ({answer.helpfulness})</p>
        </div>
        <div className="clickable report" onClick={handleReport}>
          <p>{report ? 'Reported' : 'Report'}</p>
        </div>
      </div>
      <div className="ansPhotos">
        {allPhotos}
      </div>
    </div>
  );
}

export default AnswerItem;
