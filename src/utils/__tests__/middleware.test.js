const middleware = require('../middleware');

it('should return middleware function', () => {
  expect(typeof middleware).toBe('function');
});
