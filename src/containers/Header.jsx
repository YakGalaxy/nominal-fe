import React from 'react'
import { Anchor, Header, Nav } from "grommet";
import { DarkModeToggle } from "../components/DarkModeToggle";


export const HeaderContainer = () => (
  <Header background="dark-1" pad="medium">
    <Nav direction="row">
      <Anchor label="Home" href="#" />
      <Anchor label="Profile" href="#" />
    </Nav>
    <DarkModeToggle />
  </Header>
);