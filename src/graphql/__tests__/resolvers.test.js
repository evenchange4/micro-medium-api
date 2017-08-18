const resolvers = require('../resolvers');

jest.mock('../../utils/parser', () => ({
  posts: data => data,
  user: data => data,
}));

it('should resolve query posts', async () => {
  expect(
    await resolvers.Query.posts(
      {},
      {
        username: 'evenchange4',
        limit: 10,
      },
      {
        Raw: {
          load: data => new Promise(resolve => resolve(data)),
        },
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
      {
        Raw: {
          load: data => new Promise(resolve => resolve(data)),
        },
      },
    ),
  ).toMatchSnapshot();
});
