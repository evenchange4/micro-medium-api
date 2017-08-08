const constants = require('../constants');

it('should return constants', () => {
  expect(constants).toMatchSnapshot();
});
