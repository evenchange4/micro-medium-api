const R = require('ramda');
const TimestampType = require('../utils/TimestampType');
const parser = require('../utils/parser');

const resolvers = {
  Query: {
    posts: (obj, { username, limit }, context) =>
      context.Raw.load({ username, limit }).then(parser.posts),

    user: (obj, { username }, context) =>
      context.Raw.load({ username }).then(parser.user),
  },

  Post: {
    subtitle: R.path(['content', 'subtitle']),
  },

  Timestamp: TimestampType,
};

module.exports = resolvers;
