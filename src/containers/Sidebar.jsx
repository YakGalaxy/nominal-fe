import React from "react";
import { Sidebar, Button, Nav } from "grommet";
import { UserImage } from "../components/Avatar";
import { Projects, Clock } from "grommet-icons";
import { SaveButton } from "../components/SaveButton";
import { HelpButton } from "../components/HelpButton";
import TextZoomIn from "../components/TextZoomIn"; // Correct default import
import TextZoomOut from "../components/TextZoomOut"; // Correct default import
import { FontSizeProvider } from "../components/FontSizeProvider";
import { HtmlButton } from "../components/HtmlButton";
import { EraseButton } from "../components/EraseButton";
import { DocumentsButton } from "../components/DocumentsButton";

const SidebarContainer = ({editorState, setEditorState }) => {
  return (
    <FontSizeProvider>
      <Sidebar
        align="center"
        height="80vh"
        background="background"
        className="fadeSidebar"
      >
        <Nav gap="small">
          <DocumentsButton hoverIndicator />
          <HtmlButton />
          <EraseButton
            hoverIndicator
            editorState={editorState}
            setEditorState={setEditorState}
          />
          <SaveButton
            hoverIndicator
            editorState={editorState}
            setEditorState={setEditorState}
          />
          <HelpButton hoverIndicator />
        </Nav>
      </Sidebar>
    </FontSizeProvider>
  );
};

export default SidebarContainer;
