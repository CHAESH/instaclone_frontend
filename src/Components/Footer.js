import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    /*last-chile만 제외하고 적용 */
    margin-right: 16px;
  }
`;

const Link = styled.a`
  color: ${(props) => props.theme.darkBlueColor};
`;

const Copyright = styled.span`
  color: ${(props) => props.theme.darkGreyColor};
`;

export default () => (
  <Footer>
    <List>
      <ListItem>
        <Link href="#">About</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Help</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Press</Link>
      </ListItem>
      <ListItem>
        <Link href="#">API</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Jobs</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Privacy</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Terms</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Locations</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Top Accounts</Link>{" "}
      </ListItem>
      <ListItem>
        <Link href="#">Hashtags</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Language</Link>
      </ListItem>
    </List>
    <Copyright>Instaclone {new Date().getFullYear()} &copy;</Copyright>
  </Footer>
);
