import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import gql from "graphql-tag";
import useInput from "../Hooks/useInput";
import Input from "./Input";
import {
  InstaIcon,
  Home,
  DirectMessage,
  Compass,
  HeartEmtpy,
  User,
} from "./Icons";
import { useQuery } from "@apollo/react-hooks";

const Header = styled.header`
  width: 100%;
  background-color: white;
  border: 0;
  border-radius: 0px;
  border-bottom: ${(props) => props.theme.boxBorder};
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 0px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  display: flex;
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const SearchInput = styled(Input)`
  background-color: ${(props) => props.theme.bgColor};
  padding: 5px;
  font-size: 14px;
  height: auto;
  border-radius: 3px;
  text-align: center;
  width: 70%;
  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 23px;
  }
`;

const ME = gql`
  {
    me {
      user {
        username
      }
    }
  }
`;

export default withRouter(({ history }) => {
  const search = useInput("");
  const { meQuery } = useQuery(ME);
  console.log(meQuery);
  const onSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/">
            <InstaIcon />
          </Link>
        </HeaderColumn>
        <HeaderColumn>
          <form onSubmit={onSearchSubmit}>
            <SearchInput {...search} placeholder="Search" />
          </form>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderLink to="/">
            <Home />
          </HeaderLink>
          <HeaderLink to="/direct">
            <DirectMessage />
          </HeaderLink>
          <HeaderLink to="/explore">
            <Compass />
          </HeaderLink>
          <HeaderLink to="/norification">
            <HeartEmtpy />
          </HeaderLink>
          <HeaderLink to="/username">
            <User />
          </HeaderLink>
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});
