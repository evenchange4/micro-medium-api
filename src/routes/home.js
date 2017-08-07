const { send } = require('micro');

const home = (req, res) =>
  send(res, 200, 'Please try /@:username/posts?limit=100');

module.exports = home;
