const { ApolloServer } = require("apollo-server-micro");
const { getUserFromToken } = require("./auth");
const cors = require("micro-cors")();
const { resolvers } = require("./resolvers");
//const { typeDefs } = require("./typeDefs");

const { gql } = require('apollo-server');
/* 
const server = new ApolloServer({
  typeDefs,
  resolvers,
  //   context: {
  //       "API_KEY": '',
  //   },
  context: ({ req, res }) => {
    try {
      // Get the user token from the headers.
      const token = req.headers.authorization || req.cookies.token || "";

      // try to retrieve a user with the token
      const user = getUserFromToken(token);

      // add the user to the context
      return {
        user,
        API_KEY: "asdf",
        // expose the cookie helper in the GraphQL context object
        cookie: res.cookie
      };
    } catch (error) {
      console.log("Error", error);
    }
    return {
      API_KEY: "asdf",
      // expose the cookie helper in the GraphQL context object
      cookie: res.cookie
    };
  }
});

const handler = server.createHandler({
  path: "/api/graphql",
  introspection: true
});

module.exports = cors((req, res) =>
  req.method === "OPTIONS" ? res.end() : handler(req, res)
); // highlight-line
 */
const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        password: String!
        name: String
        lastname: String
        email: String
        dni: String!
        country: String
        city: String
        profileImage: String
        products: [Product]
    }

    type Product {
        id: ID!
        title: String
        size: String
        quantity: String
        productImage: String
    }

    type ShoppingCart {
        userId: ID!
        products: [Product]
    }

    type Query {
        products: [Product]!
        product(id: ID!): Product
        user(username: String!, password: String!): User
    }

    type UserInput {
        id: ID!
        username: String!
        password: String!
        name: String
        lastname: String
        email: String
        dni: String!
        country: String
        city: String
        profileImage: String
        products: [Product]
    }

    type SignInInput {
        username: String!
        password: String!
    }

    type Mutation {
        uploadProduct(productID: ID!): Product
        addProductToCart(productID: ID!, userID: ID!): User!
        signIn(input: SignInInput!): User!
    }
`;

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server.createHandler({
  path: "/api/graphql",
  introspection: true
});