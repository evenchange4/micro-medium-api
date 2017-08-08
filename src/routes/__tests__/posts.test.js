/* eslint global-require: 0, no-throw-literal: 0 */

beforeEach(() => {
  jest.resetModules();
  jest.mock('micro', () => ({
    send: (res, code, content) => ({ res, code, content }),
  }));
  jest.mock('../../utils/toJSON', () => d => d);
  jest.mock('../../utils/simplify', () => () => d => d);
});

it('should return posts', async () => {
  jest.doMock('../../utils/API', () => ({
    getPosts: (username, query) => ({
      username,
      query,
    }),
  }));
  const posts = require('../posts');

  expect(
    await posts({ query: {}, params: { username: 'username' } }),
  ).toMatchSnapshot();
});

it('should return posts with simplify', async () => {
  jest.doMock('../../utils/API', () => ({
    getPosts: (username, query) => ({
      username,
      query,
    }),
  }));
  const posts = require('../posts');
  expect(
    await posts({
      query: { type: 'simple' },
      params: { username: 'username' },
    }),
  ).toMatchSnapshot();
});

it('should return posts with error', async () => {
  jest.doMock('../../utils/API', () => ({
    getPosts: (username, query) => {
      throw { response: { username, query, test: 'error response' } };
    },
  }));
  const posts = require('../posts');

  expect(
    await posts({
      query: { type: 'simple' },
      params: { username: 'username' },
    }),
  ).toMatchSnapshot();
});
