import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { defaults, resolvers } from "./LocalState";

// const link = createHttpLink({
//   url: "http://localhost:3000/graphql",
// });

const cache = new InMemoryCache();

export default new ApolloClient({
  uri: "http://localhost:4000",
  cache,
  clientState: {
    defaults,
    resolvers,
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
