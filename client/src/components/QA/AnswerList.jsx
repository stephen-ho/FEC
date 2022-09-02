import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerItem from './AnswerItem.jsx';
import AnswerModal from '../Modal/AnswerModal.jsx';
import './QA.css';

function AnswerList({ questionid, product }) {

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
  }

  return (
    <div className="AnswerList">
      <div className="initialA">
        {answers.slice(0,2)}
      {/* {showMoreAnswers ? answers : answers.slice(0,2)} */}
      </div>
      <div id="hideContainer">
        <div id="hideContent" className={showMoreAnswers ? "showA" : "hideA"}>
          {answers.slice(2)}
        </div>
      </div>
      <AnswerModal onClose={() => setShow(false)} show={show} questionid={questionid} product={product}/>
      <p className="clickable SeeMore" onClick={handleClick}>See More Answers</p>
      <button onClick={() => setShow(true)}>Add Answer</button>
    </div>
  );
}

export default AnswerList;
