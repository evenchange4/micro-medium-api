const axios = require('axios');
const { send } = require('micro');
const R = require('ramda');
const qs = require('query-string');
const { router, get } = require('microrouter');
const compress = require('micro-compress');
const cors = require('micro-cors');
const toJSON = require('./utils/toJSON');
const simplify = require('./utils/simplify');

const ORIGIN = process.env.ORIGIN;
const BASE_URL = 'https://medium.com';

const notfound = (req, res) =>
  send(res, 200, 'Please try /@:username/posts?limit=100');

const enhance = R.compose(
  cors({
    allowMethods: ['GET'],
    allowHeaders: [],
    origin: ORIGIN || '*',
  }),
  compress,
);

const main = async (req, res) => {
  const queryString = R.pipe(R.merge({ format: 'json' }), qs.stringify)(
    req.query,
  );
  const { username } = req.params;
  try {
    const response = await axios.request(`@${username}/latest?${queryString}`, {
      method: 'get',
      baseURL: BASE_URL,
      responseType: 'text',
    });
    const json = toJSON(response);
    if (req.query.type === 'simple') {
      return send(res, 200, simplify(BASE_URL, username)(json));
    }
    return send(res, 200, json);
  } catch (error) {
    return send(res, 404, toJSON(error.response));
  }
};

module.exports = router(
  get('/@:username/posts', enhance(main)),
  get('*', enhance(notfound)),
);
