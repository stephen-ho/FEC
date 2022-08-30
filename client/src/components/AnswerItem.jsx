import React from 'react';
import AnswerList from './AnswerList.jsx';

function AnswerItem({ question }) {

  let answerObj;

  for (var key in question.answers) {
    answerObj = question.answers[key];
  };

  function handleHelpful() {
    console.log('Add 1 to helpfulness');
  }

  return (
    <div>
      <h3>A: {answerObj.body}</h3>
      <p>By: {answerObj.answerer_name}</p>
      <p>Date: {answerObj.date}</p>
      <p>Helpful?</p>
      <p onClick={handleHelpful}>Yes ({answerObj.helpfulness})</p>
    </div>
  );
}

export default AnswerItem;
