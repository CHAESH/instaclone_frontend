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
  z-index: 2;
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
      username
    }
  }
`;

export default withRouter(({ history }) => {
  const search = useInput("");
  const { data, loading } = useQuery(ME);
  // graphql server로 부터 me 값을 받기 전까지 렌더링 하지 않기위해
  if (loading) return "";
  const { me } = data;
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
          <HeaderLink to="/notification">
            <HeartEmtpy />
          </HeaderLink>
          {!me ? (
            <HeaderLink to="/#">
              <User />
            </HeaderLink>
          ) : (
            <HeaderLink to={me.username}>
              <User />
            </HeaderLink>
          )}
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});
