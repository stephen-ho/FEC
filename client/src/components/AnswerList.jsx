import React, { useState } from 'react';
import AnswerItem from './AnswerItem.jsx';
import App from './App.jsx';
import sampleData from './sampleData.js';
import Modal from './Modal/Modal.jsx';

function AnswerList() {

  const [show, setShow] = useState(false);

  const answers = sampleData.results.map((question, index) => {
    return (<AnswerItem key={index} question={question} />);
  });

  function handleClick() {
    console.log('See More Answers');
  }

  return (
    <div>
      {answers}
      <p onClick={() => setShow(true)}>Add Answer</p>
      <Modal onClose={() => setShow(false)} show={show} />
      <p onClick={handleClick}>See More Answers</p>
    </div>
  );
}

export default AnswerList;
