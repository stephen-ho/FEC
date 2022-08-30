/* eslint-disable import/extensions */
import React, { useState } from 'react';
import QuestionList from './QuestionList.jsx';
import sampleProduct from './sampleData.js';
import AnswerList from './AnswerList.jsx';
import Modal from './Modal/Modal.jsx';

function App() {
  const [question, setQuestion] = useState('');
  const [show, setShow] = useState(false);

  function handleQuestion(e) {
    setQuestion(e.target.value);
  }

  return (
    <>
      <h1>Questions & Answers</h1>
      <input
        type="text"
        value={question}
        onChange={handleQuestion}
      />
      <p>Ask a Question</p>
      <div>
        <QuestionList products={sampleProduct} />
        <button onClick={() => setShow(true)}>Show Modal</button>
        <Modal onClose={() => setShow(false)} show={show} />
      </div>
    </>
  );
}

export default App;
