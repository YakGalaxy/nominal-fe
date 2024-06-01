import React from 'react'
import { Anchor, Avatar, Header, Nav } from "grommet";
import { DarkModeToggle } from "../components/DarkModeToggle";

const gravatarLink =
  "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80";

export const HeaderContainer = () => (
  <Header background="light-3" pad="small">
    <Avatar src={gravatarLink} />
    <Nav direction="row">
      <Anchor label="Home" href="#" />
      <Anchor label="Profile" href="#" />
      <DarkModeToggle />
    </Nav>
  </Header>
);