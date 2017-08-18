const request = require('request-promise');
const { BASE_URL } = require('./constants');
const parser = require('./parser');

const getPosts = ({ username, limit = 10 }) =>
  request({
    method: 'GET',
    uri: `${BASE_URL}/@${username}/latest`,
    qs: {
      format: 'json',
      limit,
    },
  }).then(parser.toJSON);

module.exports = {
  getPosts,
};
