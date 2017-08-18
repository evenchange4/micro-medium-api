const typeDefs = `
  scalar Timestamp

  type Content {
    subtitle: String
  }

  type Post {
    id: ID!
    title: String!
    subtitle: String
    uniqueSlug: String!
    url: String!
    content: Content!
    firstPublishedAt: Timestamp!
    latestPublishedAt: Timestamp
    createdAt: Timestamp
    updatedAt: Timestamp
  }

  type User {
    userId: ID!
    name: String!
    username: String!
    createdAt: Timestamp,
    lastPostCreatedAt: Timestamp,
    imageId: String
    backgroundImageId: String
    bio: String
    type: String
  }

  type Query {
    posts(username: String!, limit: Int = 10): [Post!]!
    user(username: String!): User!
  }
`;

module.exports = typeDefs;
