import React from 'react';
import './App.css';

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
      <h4>A: {answer.body}</h4>
      <div className='answerInfo'>
        <div className='postInfo'>
          <p>By: {answer.answerer_name} on {answer.date}</p>
        </div>
        <div className='helpful'>
          <p>Helpful?</p>
          <p onClick={handleHelpful}>Yes ({answer.helpfulness})</p>
        </div>
      </div>
    </div>
  );
}

export default AnswerItem;
