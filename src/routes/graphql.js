const { microGraphql } = require('graphql-server-micro');
const DataLoader = require('dataloader');
const R = require('ramda');
const schema = require('../graphql/schema');
const API = require('../utils/API');

const graphql = microGraphql(() => ({
  schema,

  // Per-request state in memory
  context: {
    Raw: new DataLoader(args => Promise.all(args.map(API.getPosts)), {
      cacheKeyFn: R.prop('username'),
    }),
  },
}));

module.exports = graphql;
