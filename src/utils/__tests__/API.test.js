const API = require('../API');

jest.mock('request-promise', () => data =>
  new Promise(resolve => resolve(data)),
);

jest.mock('../parser', () => ({
  toJSON: response => response,
}));

it('should return API getPosts with correct default limit', async () => {
  expect(await API.getPosts('username')).toMatchSnapshot();
});

it('should return API getPosts with limit 100', async () => {
  expect(await API.getPosts('username', 100)).toMatchSnapshot();
});
