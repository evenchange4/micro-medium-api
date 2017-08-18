const R = require('ramda');
const compress = require('micro-compress');
const cors = require('micro-cors');
const rateLimit = require('micro-ratelimit');

const ORIGIN = process.env.ORIGIN;

const middleware = R.compose(
  cors({
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: [],
    origin: ORIGIN || '*',
  }),
  compress,
  R.curry(rateLimit)({ window: 1000, limit: 1 }),
);

module.exports = middleware;
