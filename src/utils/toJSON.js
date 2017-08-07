const R = require('ramda');

const toJSON = R.pipe(
  R.prop('data'),
  R.replace('])}while(1);</x>', ''),
  JSON.parse,
);

module.exports = toJSON;
