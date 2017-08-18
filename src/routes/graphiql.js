const { microGraphiql } = require('graphql-server-micro');

const graphiql = endpointURL =>
  microGraphiql({
    endpointURL,

    // Default Query
    query: `query PostQuery($username: String!, $limit: Int) {
  posts(username: $username, limit: $limit) {
    title
    firstPublishedAt
    url
    subtitle
  }
  user(username: $username) {
    username
    name
    bio
  }
}`,
    variables: {
      username: 'evenchange4',
      limit: 100,
    },
    operationName: 'PostQuery',
  });

module.exports = graphiql;
