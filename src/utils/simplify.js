const R = require('ramda');
const { BASE_URL } = require('./constants');

const simplify = username =>
  R.pipe(
    R.path(['payload', 'references', 'Post']),
    R.values,
    R.project(['title', 'uniqueSlug', 'firstPublishedAt', 'content']),
    R.map(e => ({
      title: e.title,
      firstPublishedAt: e.firstPublishedAt,
      url: `${BASE_URL}/@${username}/${e.uniqueSlug}`,
      subtitle: e.content.subtitle,
    })),
    R.sort(R.descend(R.prop('firstPublishedAt'))),
  );

module.exports = simplify;
