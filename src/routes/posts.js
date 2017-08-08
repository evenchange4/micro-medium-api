const { send } = require('micro');
const API = require('../utils/API');
const toJSON = require('../utils/toJSON');
const simplify = require('../utils/simplify');

const posts = async (req, res) => {
  const { username } = req.params;
  try {
    const response = await API.getPosts(username, req.query);
    const json = toJSON(response);

    if (req.query.type === 'simple') {
      return send(res, 200, simplify(username)(json));
    }

    return send(res, 200, json);
  } catch (error) {
    return send(res, 404, toJSON(error.response));
  }
};

module.exports = posts;
