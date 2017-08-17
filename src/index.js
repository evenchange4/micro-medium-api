const { router, get, post, options } = require('microrouter');
const { microGraphiql, microGraphql } = require('graphql-server-micro');
const home = require('./routes/home');
const option = require('./routes/option');
const middleware = require('./utils/middleware');
const schema = require('./graphql/schema');

const graphqlHandler = microGraphql({ schema });
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' });

module.exports = router(
  get('/graphql', middleware(graphqlHandler)),
  post('/graphql', middleware(graphqlHandler)),
  get('/graphiql', middleware(graphiqlHandler)),
  get('*', middleware(home)),
  options('*', option),
);
