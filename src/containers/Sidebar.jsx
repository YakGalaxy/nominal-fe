import React from "react";
import { Sidebar, Button, Nav } from "grommet";
import { UserImage } from "../components/Avatar";
import { Projects, Clock } from "grommet-icons";
import { SaveButton } from "../components/SaveButton";
import { HelpButton } from "../components/HelpButton";
import TextZoomIn from "../components/TextZoomIn"; // Correct default import
import TextZoomOut from "../components/TextZoomOut"; // Correct default import
import { FontSizeProvider } from "../components/FontSizeProvider";

const SidebarContainer = () => {
  return (
    <FontSizeProvider>
      <Sidebar
        align="center"
        height="80vh"
        header={<UserImage />}
        footer={<HelpButton hoverIndicator />}
        background="background-front"
      >
        <Nav gap="small">
          <Button icon={<Projects />} hoverIndicator />
          <Button icon={<Clock />} hoverIndicator />
          <SaveButton hoverIndicator />
          <TextZoomIn hoverIndicator />
          <TextZoomOut hoverIndicator />
        </Nav>
      </Sidebar>
    </FontSizeProvider>
  );
};

export default SidebarContainer;
