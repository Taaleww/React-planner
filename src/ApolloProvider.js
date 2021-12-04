import React from "react";
import App from "./App";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from 'apollo-link-context';

// const httpLink = createHttpLink({
//   uri: "http://localhost:5000/graphql",
// });

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

const httpLink = createHttpLink({
  uri: "http://localhost:5000/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("access-token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onError: (e) => {
    console.log(e);
  },
});

export default (
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>
);
