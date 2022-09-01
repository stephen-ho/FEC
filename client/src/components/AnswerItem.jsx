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

  function handleReport() {
    console.log('Reported');
  }

  return (
    <div className="AnswerItem">
      <h4>A: {answer.body} </h4>
      <div className="answerInfo">
        <div className="postInfo">
          <p>By: {answer.answerer_name} on {answer.date}</p>
        </div>
        <div className="helpful" onClick={handleHelpful}>
          <p>Helpful?</p>
          <p>Yes ({answer.helpfulness})</p>
        </div>
        <div className="report" onClick={handleReport}>
          <p>Report</p>
        </div>
      </div>
    </div>
  );
}

export default AnswerItem;
