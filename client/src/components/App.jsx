/* eslint-disable import/extensions */
import React, { useState } from 'react';
import QuestionList from './QuestionList.jsx';
import sampleProduct from './sampleData.js';
import AnswerList from './AnswerList.jsx';
import QuestionModal from './Modal/QuestionModal.jsx';

function App() {
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <h1>Questions & Answers</h1>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
      />
      <br/>
      <button onClick={() => setShow(true)}>Ask a Question</button>
      <QuestionModal onClose={() => setShow(false)} show={show} />
      <div>
        <QuestionList products={sampleProduct} />
      </div>
    </>
  );
}

export default App;
