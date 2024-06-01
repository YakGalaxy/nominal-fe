import React from 'react'
import { Anchor, Header, Nav } from "grommet";
import { DarkModeToggle } from "../components/DarkModeToggle";
import { TextResizeToggle } from '../components/TextResizeToggle';


export const HeaderContainer = ({ darkMode, setDarkMode }) => (
  <Header pad="small" background="background-back">
    <Nav direction="row">
      <Anchor label="Home" href="#" />
      <Anchor label="Profile" href="#" />
    </Nav>
    <TextResizeToggle />
    <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
  </Header>
);