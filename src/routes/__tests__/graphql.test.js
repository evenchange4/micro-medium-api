const graphql = require('../graphql');

jest.mock('graphql-server-micro', () => ({
  microGraphql: d => d,
}));

jest.mock('../../graphql/schema', () => ({ schema: 'mock' }));

it('should return graphql arguments', () => {
  expect(graphql()).toMatchSnapshot();
});
