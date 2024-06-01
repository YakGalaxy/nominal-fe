import React from 'react'
import { Anchor, Header, Nav } from "grommet";
import { DarkModeToggle } from "../components/DarkModeToggle";
import { TextResizeToggle } from '../components/TextResizeToggle';


export const HeaderContainer = () => (
  <Header background="dark-1" pad="medium">
    <Nav direction="row">
      <Anchor label="Home" href="#" />
      <Anchor label="Profile" href="#" />
    </Nav>
    <TextResizeToggle />
    <DarkModeToggle />
  </Header>
);