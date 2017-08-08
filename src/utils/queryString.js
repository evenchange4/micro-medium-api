const R = require('ramda');
const qs = require('query-string');

const queryString = R.pipe(R.merge({ format: 'json' }), qs.stringify);

module.exports = queryString;
