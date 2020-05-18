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
  // header: {
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // },
  // request: async (operation) => {
  //   // const token = localStorage.getItem("token");
  //   const token =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNrOTljYmRxZ3FhZXQwOTgxOHhmc3pteHEiLCJpYXQiOjE1ODc0MzkyOTJ9.Nx6LoaoBLMv3hT2XhTrNxJ2d21AovGRejNWsJiy53P4";
  //   return await operation.setContext({
  //     headers: {
  //       authorization: `Bearer ${token}`,
  //     },
  //   });
  // },
});
