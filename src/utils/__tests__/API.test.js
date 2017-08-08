const API = require('../API');

jest.mock('axios', () => ({
  request: (url, options) => ({ url, options }),
}));

it('should return API getPosts', () => {
  expect(API.getPosts('username', {})).toMatchSnapshot();
});
