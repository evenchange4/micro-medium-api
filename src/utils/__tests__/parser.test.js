const parser = require('../parser');
const posts = require('../../__mock-data__/mock-posts.json');

it('should return correct JSON ', () => {
  expect(parser.toJSON('])}while(1);</x>{"success":true}')).toMatchSnapshot();
});

it('should return correct user data ', () => {
  expect(parser.user({ payload: { user: 'data' } })).toBe('data');
});

it('should return correct posts data ', () => {
  expect(parser.posts(posts)).toMatchSnapshot();
});
