const R = require('ramda');

var urlLens = R.lensProp('url');

const simplify = (baseURL, username) => R.pipe(
  R.path(['payload', 'references', 'Post']),
  R.values,
  R.project(['title', 'uniqueSlug', 'updatedAt']),
  R.map(e => ({
    title: e.title,
    updatedAt: e.updatedAt,
    url: `${baseURL}/@username/${e.uniqueSlug}`,
  })),
);

module.exports = simplify;
