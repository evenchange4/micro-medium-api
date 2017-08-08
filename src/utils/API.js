const axios = require('axios');
const queryString = require('./queryString');
const { BASE_URL } = require('./constants');

const getPosts = (username, query) =>
  axios.request(`@${username}/latest?${queryString(query)}`, {
    method: 'get',
    baseURL: BASE_URL,
    responseType: 'text',
  });

module.exports = {
  getPosts,
};
