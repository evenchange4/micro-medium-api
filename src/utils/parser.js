const R = require('ramda');
const { BASE_URL } = require('./constants');

const toJSON = R.pipe(
  R.prop('data'),
  R.replace('])}while(1);</x>', ''),
  JSON.parse,
);

const assocWithUrl = (username, posts) =>
  posts.map(post => {
    const url = `${BASE_URL}/@${username}/${post.uniqueSlug}`;
    return R.assoc('url', url)(post);
  });

const getPosts = R.pipe(
  R.prop('payload'),
  R.converge(assocWithUrl, [
    R.path(['user', 'username']),
    R.pipe(R.path(['references', 'Post']), R.values),
  ]),
);

const getUser = R.path(['payload', 'user']);

module.exports = {
  toJSON,
  getPosts,
  getUser,
};
