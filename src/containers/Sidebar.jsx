/* eslint-disable react/prop-types */

import React from "react";
import { Sidebar, Button, Nav } from "grommet";

// Buttons

import { SaveButton } from "../components/buttons/SaveButton";
import { HelpButton } from "../components/buttons/HelpButton";
import { HtmlButton } from "../components/buttons/HtmlButton";
import { EraseButton } from "../components/buttons/EraseButton";
import { DocumentsButton } from "../components/buttons/DocumentsButton";

// Utilities

import { FontSizeProvider } from "../components/utilities/FontSizeProvider";

const SidebarContainer = ({ editorState, setEditorState }) => {
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
