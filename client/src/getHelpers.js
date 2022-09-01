/* eslint-disable quote-props */
/* eslint-disable arrow-body-style */
const axios = require('axios');
const key = require('./config.js');

module.exports = {
  getProduct: (productID) => {
    return axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${productID}`,
      headers: {
        'Authorization': `${key.API_KEY}`,
      },
    });
  },

  getStyles: (productID) => {
    return axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${productID}/styles`,
      headers: {
        'Authorization': `${key.API_KEY}`,
      },
    });
  },

  getRelated: (productID) => {
    return axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${productID}/related`,
      headers: {
        'Authorization': `${key.API_KEY}`,
      },
    });
  },
};
