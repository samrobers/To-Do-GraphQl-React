const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    email: String!
    password: String!
  }
  type Note {
    Title: String
    Description: String
  }
  type Auth {
    token: ID!
    profile: Profile
  }
  type Query {
    profiles: [Profile]
  }
  type Mutation {
    signUp(email: String!, password: String!): Auth
    signIn(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
