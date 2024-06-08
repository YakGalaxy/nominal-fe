/* eslint-disable react/prop-types */

import { Sidebar, Nav } from "grommet";

// Buttons

import { SaveButton } from "../components/buttons/SaveButton";
import { HelpButton } from "../components/buttons/HelpButton";
import { HtmlButton } from "../components/buttons/HtmlButton";
import { EraseButton } from "../components/buttons/EraseButton";
import { DocumentsButton } from "../components/buttons/DocumentsButton";
import { HomeButton } from "../components/buttons/HomeButton";

// Utilities

import { FontSizeProvider } from "../components/utilities/FontSizeProvider";

const SidebarContainer = ({ editorState, setEditorState, documentTitle, setDocumentTitle }) => {

  return (
    <FontSizeProvider>
      <Sidebar
        align="center"
        height="80vh"
        background="background"
        className="fadeSidebar"
      >
        <Nav gap="small">
          <HomeButton hoverIndicator />
          <DocumentsButton
            hoverIndicator
            editorState={editorState}
            setEditorState={setEditorState}
            documentTitle={documentTitle}
            setDocumentTitle={setDocumentTitle}
          />
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
            documentTitle={documentTitle}
            setDocumentTitle={setDocumentTitle}
          />
          <HelpButton hoverIndicator />
        </Nav>
      </Sidebar>
    </FontSizeProvider>
  );
};

export default SidebarContainer;
