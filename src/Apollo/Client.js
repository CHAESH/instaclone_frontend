import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { defaults, resolvers } from "./LocalState";

const link = createHttpLink({
  uri: "http://localhost:4000/",
});

const cache = new InMemoryCache();

export default new ApolloClient({
  link,
  cache,
  //   clientState: {
  //     defaults,
  //     resolvers,
  //   },
});
