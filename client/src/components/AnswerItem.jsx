import React from 'react';
import AnswerList from './AnswerList.jsx';

function AnswerItem({ answer }) {

  // let answerObj;

  // for (var key in answer.answers) {
  //   answerObj = question.answers[key];
  // };

  function handleHelpful() {
    console.log('Add 1 to helpfulness');
  }

  return (
    <div>
      <h3>A: {answer.body}</h3>
      <p>By: {answer.answerer_name}</p>
      <p>Date: {answer.date}</p>
      <p>Helpful?</p>
      <p onClick={handleHelpful}>Yes ({answer.helpfulness})</p>
    </div>
  );
}

export default AnswerItem;
