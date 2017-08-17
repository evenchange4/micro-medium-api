const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const TimestampType = new GraphQLScalarType({
  name: 'Timestamp',
  description: 'Timestamp custom scalar type',
  parseValue(value) {
    return value; // value from the client
  },
  serialize(value) {
    return value; // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10); // ast value is always in string format
    }
    return null;
  },
});

module.exports = TimestampType;
