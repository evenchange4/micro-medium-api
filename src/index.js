const R = require('ramda');
const { router, get } = require('microrouter');
const compress = require('micro-compress');
const cors = require('micro-cors');
const posts = require('./routes/posts');
const home = require('./routes/home');

const ORIGIN = process.env.ORIGIN;

const enhance = R.compose(
  cors({
    allowMethods: ['GET'],
    allowHeaders: [],
    origin: ORIGIN || '*',
  }),
  compress,
);

module.exports = router(
  get('/@:username/posts', enhance(posts)),
  get('*', enhance(home)),
);
