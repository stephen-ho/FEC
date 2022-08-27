import React from 'react';
// eslint-disable-next-line import/extensions
import QuestionItem from './QuestionItem.jsx';
import App from './App.jsx';

function QuestionList({ products }) {
  //console.log(products);
  const questions = products.results.map((question, index) => {
    return (<QuestionItem key={index} question={question} />);
  });

  return (
    <>
      <div>
        {questions}
        {/* <QuestionItem products={products} /> */}
      </div>
      <p>See More Questions</p>
    </>
  );
}

export default QuestionList;
