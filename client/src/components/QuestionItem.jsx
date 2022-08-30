import React from 'react';
import AnswerList from './AnswerList.jsx';

function QuestionItem({ question }) {
  //console.log(question);
  return (
    <div>
      <h2>Q: {question.question_body}</h2>
      <AnswerList question={question}/>
    </div>
  );
}

export default QuestionItem;
