const API = require('../utils/API');
const TimestampType = require('../utils/TimestampType');
const parser = require('../utils/parser');

const resolvers = {
  Query: {
    posts: (obj, args) =>
      API.getPosts(args.username, args.limit).then(parser.getPosts),
    user: (obj, args) =>
      API.getPosts(args.username, args.limit).then(parser.getUser),
  },

  Timestamp: TimestampType,
};

module.exports = resolvers;
