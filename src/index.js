const { router, get, post } = require('microrouter');
const { microGraphiql, microGraphql } = require('graphql-server-micro');
const home = require('./routes/home');
const middleware = require('./utils/middleware');
const schema = require('./graphql/schema');

const graphqlHandler = microGraphql({ schema });
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' });

module.exports = router(
  get('/graphql', middleware(graphqlHandler)),
  post('/graphql', middleware(graphqlHandler)),
  get('/graphiql', middleware(graphiqlHandler)),
  get('*', middleware(home)),
);
