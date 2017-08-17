const resolvers = require('../resolvers');

jest.mock('../../utils/API', () => ({
  getPosts: (username, limit) =>
    new Promise(resolve => resolve({ username, limit })),
}));

jest.mock('../../utils/parser', () => ({
  getPosts: data => data,
  getUser: data => data,
}));

it('should resolve query posts', async () => {
  expect(
    await resolvers.Query.posts(
      {},
      {
        username: 'evenchange4',
        limit: 10,
      },
    ),
  ).toMatchSnapshot();
});

it('should resolve query user', async () => {
  expect(
    await resolvers.Query.user(
      {},
      {
        username: 'evenchange4',
      },
    ),
  ).toMatchSnapshot();
});
