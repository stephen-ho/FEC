/* eslint-disable quote-props */
/* eslint-disable arrow-body-style */
const axios = require('axios');
const {API_KEY} = process.env;

module.exports = {
  getProduct: (productID) => {
    console.log(productID);
    return axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${productID}`,
      headers: {
        'Authorization': `${API_KEY}`,
      },
    });
  },

  getStyles: (productID) => {
    return axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${productID}/styles`,
      headers: {
        'Authorization': `${API_KEY}`,
      },
    });
  },

  getRelated: (productID) => {
    return axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${productID}/related`,
      headers: {
        'Authorization': `${API_KEY}`,
      },
    });
  },
};
