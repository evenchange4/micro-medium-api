const axios = require('axios');
const { BASE_URL } = require('./constants');
const parser = require('./parser');

const getPosts = (username, limit = 10) =>
  axios
    .request(`@${username}/latest?format=json&limit=${limit}`, {
      method: 'get',
      baseURL: BASE_URL,
      responseType: 'text',
    })
    .then(parser.toJSON);

module.exports = {
  getPosts,
};
