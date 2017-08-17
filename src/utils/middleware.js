const R = require('ramda');
const compress = require('micro-compress');
const cors = require('micro-cors');

const ORIGIN = process.env.ORIGIN;

const middleware = R.compose(
  cors({
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: [],
    origin: ORIGIN || '*',
  }),
  compress,
);

module.exports = middleware;
