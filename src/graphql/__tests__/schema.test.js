const { addMockFunctionsToSchema } = require('graphql-tools');
const { graphql } = require('graphql');
const schema = require('../schema');

addMockFunctionsToSchema({ schema });

it('should return mocked post data', async () => {
  const query = `
  query QueryPost {
    posts(username: "username") { title }
  }
  `;

  expect(await graphql(schema, query)).toMatchSnapshot();
});

it('should return mocked user data', async () => {
  const query = `
  query QueryUser {
    user(username: "username") { bio }
  }
  `;

  expect(await graphql(schema, query)).toMatchSnapshot();
});
