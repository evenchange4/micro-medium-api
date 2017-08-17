const parser = require('../parser');
const posts = require('../../__mock-data__/mock-posts.json');

it('should return correct JSON ', () => {
  expect(
    parser.toJSON({ data: '])}while(1);</x>{"success":true}' }),
  ).toMatchSnapshot();
});

it('should return correct user data ', () => {
  expect(parser.getUser({ payload: { user: 'data' } })).toBe('data');
});

it('should return correct posts data ', () => {
  expect(parser.getPosts(posts)).toMatchSnapshot();
});
