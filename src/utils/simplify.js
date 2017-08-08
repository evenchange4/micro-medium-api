const R = require('ramda');
const { BASE_URL } = require('./constants');

const simplify = username =>
  R.pipe(
    R.path(['payload', 'references', 'Post']),
    R.values,
    R.project(['title', 'uniqueSlug', 'updatedAt']),
    R.map(e => ({
      title: e.title,
      updatedAt: e.updatedAt,
      url: `${BASE_URL}/@${username}/${e.uniqueSlug}`,
    })),
  );

module.exports = simplify;
