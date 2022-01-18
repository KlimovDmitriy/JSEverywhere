const { gql } = require('apollo-server-express');
const typeDefs = gql`
  scalar DateTime
  type Query {
    hello: String
    notes: [Note!]!
    note(id: ID!): Note!
  }
  type Note {
    id: ID!
    content: String!
    author: User!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  type User {
  
  }
  type Mutation {
    newNote(content: String!): Note!
    updateNote(id: ID!, content: String!): Note!
    deleteNote(id: ID!): Boolean!
  }
`;

module.exports = typeDefs;
