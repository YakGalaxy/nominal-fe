import React from 'react'
import { Box, Sidebar, Button, Nav } from "grommet";
import { UserImage } from "../components/Avatar"
import { Help, Projects, Clock } from "grommet-icons";
import { SaveButton } from '../components/SaveButton';
import { HelpButton } from '../components/HelpButton';

export const SidebarContainer = () => {
  return (
    <Sidebar align="center"
      background="dark-1"
      height="large"
      Sidebar
      Container
      header={<UserImage />}
      footer={<HelpButton hoverIndicator />}
    >
      <Nav gap="small">
        <Button icon={<Projects />} hoverIndicator />
        <Button icon={<Clock />} hoverIndicator />
        <SaveButton hoverIndicator/>
      </Nav>
    </Sidebar>
  );
}
