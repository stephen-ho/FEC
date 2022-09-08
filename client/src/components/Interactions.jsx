import React, { createContext } from 'react';

const axios = require('axios');

const { API_URL } = process.env;
const header = { Authorization: process.env.API_KEY };

const Interactions = ({ children }) => {
  const interactionsHandler = (e, module) => {
    const elem = e.target;
    const timestamp = new Date(Date.now());

    const body = {
      element: elem.outerHTML,
      widget: module,
      time: timestamp,
    };

    axios.post(`${API_URL}/interactions`, body, { headers: header })
      .catch((err) => {
        console.log(err);
      });

    console.log('INTERACTION RECORDED');
    console.log(body);
  };

  return (
    <div>
      {React.Children.map(children, (child) => React.cloneElement(child, { interactions: interactionsHandler }))}
    </div>
  );
};

export default Interactions;
