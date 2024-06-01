import React from 'react'
import { Box, Sidebar, Button, Nav } from "grommet";
import { UserImage } from "../components/Avatar"
import { Help, Projects, Clock } from "grommet-icons";
import { SaveButton } from '../components/SaveButton';

export const SidebarContainer = () => {
  return (
    <Sidebar
      background="dark-1"
      height="large"
      Sidebar
      Container
      header={<UserImage />}
      footer={<Button icon={<Help />} hoverIndicator />}
    >
      <Nav gap="small">
        <Button icon={<Projects />} hoverIndicator />
        <Button icon={<Clock />} hoverIndicator />
        <SaveButton />
      </Nav>
    </Sidebar>
  );
}
