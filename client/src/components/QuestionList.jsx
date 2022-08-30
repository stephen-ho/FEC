import React, { useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import QuestionItem from './QuestionItem.jsx';
import App from './App.jsx';

function QuestionList({ products }) {

  const [questionsList, setQuestions] = useState([]);
  // console.log(products);

  const options = {
    headers: {'Authorization': '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'},
    params: {'product_id': 65656}
  }

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions`, options)
    .then((response) => {
      console.log(response.data.results)
      setQuestions(response.data.results);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);


  const questions = questionsList.map((question, index) => {
    return (<QuestionItem key={index} question={question} />);
  });

  function handleClick() {
    console.log('Clicked');
  }

  return (
    <>
      <div>
        {questions}
      </div>
      <p onClick={handleClick}>See More Questions</p>
    </>
  );
}

export default QuestionList;

// Needs to be refactored to only return first 4 Questions sorted by usefulness
