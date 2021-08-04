const { gql } = require("apollo-server-express");

const typeDefs = gql`

type Profile {
    profileId: ID
    email: String!
    password: String!
}

Type Note {
    Title: String!
    Description: String!

}
Type Auth {
    token: ID!
    profile: Profile
}

Type Mutation {
    signUp(email: String!, password: String!): Auth
    signIn(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;
