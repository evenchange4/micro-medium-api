const graphiql = require('../graphiql');

jest.mock('graphql-server-micro', () => ({
  microGraphiql: d => d,
}));

it('should return graphiql with endpointURL', () => {
  expect(graphiql('/graphql')).toMatchSnapshot();
});
