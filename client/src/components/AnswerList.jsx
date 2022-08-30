import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerItem from './AnswerItem.jsx';
import App from './App.jsx';
import sampleData from './sampleData.js';
import AnswerModal from './Modal/AnswerModal.jsx';

function AnswerList({ questionid }) {

  console.log(questionid);

  const [show, setShow] = useState(false);
  const [answersList, setAnswers] = useState([]);

  const options = {
    headers: {'Authorization': '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'},
  }

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/${questionid}/answers`, options)
    .then((response) => {
      //console.log(response.data.results)
      setAnswers(response.data.results)
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  const answers = answersList.map((answer, index) => {
    return (<AnswerItem key={index} answer={answer} />);
  });

  function handleClick() {
    console.log('See More Answers');
  }

  return (
    <div>
      {answers}
      <button onClick={() => setShow(true)}>Add Answer</button>
      <AnswerModal onClose={() => setShow(false)} show={show} />
      <p onClick={handleClick}>See More Answers</p>
    </div>
  );
}

export default AnswerList;
