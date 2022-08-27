import React from 'react';
import AnswerList from './AnswerList.jsx';

function QuestionItem({ question }) {
  console.log(question);
  return (
    <div>
      <h3>Q: {question.question_body}</h3>
      <AnswerList />
    </div>
  );
}

export default QuestionItem;
