const { send } = require('micro');

const home = (req, res) =>
  send(
    res,
    200,
    `
    Please try

    /@:username/posts
    /@:username/posts?limit=100&type=simple
`,
  );

module.exports = home;
