const typeDefs = require('../typeDefs');

it('should return typeDefs', () => {
  expect(typeDefs).toMatchSnapshot();
});
