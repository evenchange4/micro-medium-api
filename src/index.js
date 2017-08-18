const { router, get, post, options } = require('microrouter');
const home = require('./routes/home');
const option = require('./routes/option');
const graphiql = require('./routes/graphiql');
const graphql = require('./routes/graphql');
const middleware = require('./utils/middleware');

module.exports = router(
  get('/graphql', middleware(graphql)),
  post('/graphql', middleware(graphql)),
  get('/graphiql', middleware(graphiql('/graphql'))),
  get('*', middleware(home)),
  options('*', option),
);
