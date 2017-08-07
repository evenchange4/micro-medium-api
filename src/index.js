const axios = require('axios')
const { send } = require('micro')
const R = require('ramda');
const { router, get } = require('microrouter')
const compress = require('micro-compress');
const cors = require('micro-cors')();
const toJSON = require('./utils/toJSON')

const notfound = (req, res) =>
  send(res, 200, 'Please try /:id')

async function main (req, res) {
  try {
    const response = await axios.request(`@${req.params.id}/latest?format=json`, {
      method: 'get',
      baseURL: 'https://medium.com/',
      responseType: 'text',
    });
    return send(res, 200, toJSON(response))
  } catch (error) {
    return send(res, 404, toJSON(error.response))
  }
}

module.exports = router(
  get('/', notfound),
  get('/:id', main),
);
