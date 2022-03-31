const { gql } = require('apollo-server-express');


const typeDefs = gql`


type User {
    _id: ID
    username: String 
    email: String
    bookCount: Int
    savedBooks: [Book] 
}

type Book {
    _id: ID
    authors: [String] !
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

input BookInput {
    authors: [String] !
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

type Query {
    users: [User] !
    me(userId: ID!): User
}

type Mutation {
    login(email: String!, pasdgilchrsword: String!): User
    addUser(username: String!, email: String!, password: String!): User
    saveBook(input: BookInput): User
    removeBook( bookId: String!): User
    
  }


`;

module.exports = typeDefs;


// type me {

// }



// type User {
//     _id: ID
//     username: Strimg
//     email: String
//     bookCount: Int
//     savedBooks: String


// }

// type Mutation {
//     login(email: String!, password: String!): Auth
//     addUser(name: String!, email: String!, password: String!): Auth
//     saveBook(input: BookInput): User
//     removeBook( bookId: String!): User
    
//   }

// type Auth {
//     token: ID!
//     user: User

// }