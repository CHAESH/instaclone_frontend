import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import Router from "./Router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

export default () => {
  const {
    data: { isLoggedIn },
  } = useQuery(QUERY);
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router isLoggedIn={isLoggedIn} />
      </>
    </ThemeProvider>
  );
};
