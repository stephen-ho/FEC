import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerItem from './AnswerItem.jsx';
import sampleData from './sampleData.js';
import AnswerModal from './Modal/AnswerModal.jsx';

const { API_KEY } =  process.env;

import './App.css';

function AnswerList({ questionid }) {

  console.log(questionid);

  const [show, setShow] = useState(false);
  const [answersList, setAnswers] = useState([]);
  const [showMoreAnswers, setShowMoreAnswers] = useState(false);

  const options = {
    headers: {'Authorization': process.env.API_KEY},
  }

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/${questionid}/answers`, options)
      .then((response) => {
        // console.log(response.data.results)
        setAnswers(response.data.results);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  const answers = answersList.map((answer, index) => {
    return (<AnswerItem key={index} answer={answer} />);
  });

  function handleClick() {
    console.log('See More Answers');
    setShowMoreAnswers(true);
  };

  if(showMoreAnswers === true) {
    return (
      <div className="AnswerList">
      {answers}
        <AnswerModal onClose={() => setShow(false)} show={show} />
        <p onClick={handleClick}>See More Answers</p>
        <button onClick={() => setShow(true)}>Add Answer</button>
      </div>
    )
  }
  return (
    <div className="AnswerList">
      {answers.slice(0,2)}
      <AnswerModal onClose={() => setShow(false)} show={show} questionid={questionid} />
      <p onClick={handleClick}>See More Answers</p>
      <button onClick={() => setShow(true)}>Add Answer</button>
    </div>
  );
};

export default AnswerList;
