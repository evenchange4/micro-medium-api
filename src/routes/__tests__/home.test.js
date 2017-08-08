const home = require('../home');

jest.mock('micro', () => ({
  send: (res, code, content) => ({ res, code, content }),
}));

it('should return home', () => {
  expect(home()).toMatchSnapshot();
});
