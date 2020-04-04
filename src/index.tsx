import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
// import { resolvers, typeDefs } from "./resolvers";
import Pages from "./pages";
import injectStyles from "./styles";

const cache = new InMemoryCache();
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: "http://localhost:5002/graphql"
  })
  // resolvers,
  // typeDefs
});

injectStyles();
ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
