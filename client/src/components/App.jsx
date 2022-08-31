/* eslint-disable import/extensions */
import React, { useState } from 'react';
import QuestionList from './QuestionList.jsx';
import sampleProduct from './sampleData.js';
import AnswerList from './AnswerList.jsx';
import QuestionModal from './Modal/QuestionModal.jsx';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <div className='App'>
        <h1>Questions & Answers</h1>
        <div className='searchParent'>
          <input
            className='searchChild'
            type='text'
            placeholder='Have a question? Search for answers...'
            value={search}
            onChange={handleSearch}
          />
          <button onClick={() => setShow(true)}>Ask a Question</button>
        </div>
        <QuestionModal onClose={() => setShow(false)} show={show} />
        <div className='QuestionList'>
          <QuestionList products={sampleProduct} />
        </div>
      </div>
    </>
  );
}

export default App;
