const simplify = require('../simplify');
const posts = require('./posts.json');

it('should return simplify list', () => {
  expect(simplify('username')(posts)).toMatchSnapshot();
});
