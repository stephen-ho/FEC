import React from 'react';
import AnswerList from './AnswerList.jsx';

function QuestionItem({ question }) {
  //console.log(question);
  return (
    <div className="QuestionItem">
      <h3>Q: {question.question_body}</h3>
      <AnswerList questionid={question.question_id}/>
    </div>
  );
}

export default QuestionItem;
