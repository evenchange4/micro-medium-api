const { send } = require('micro');

const home = (req, res) =>
  send(
    res,
    200,
    `
    Please try the GraphiQL:
    /graphiql

    Endpoint:
    [GET/POST] /graphql



    https://github.com/evenchange4/micro-medium-api
`,
  );

module.exports = home;
