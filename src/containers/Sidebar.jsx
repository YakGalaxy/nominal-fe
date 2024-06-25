/* eslint-disable react/prop-types */

import { Sidebar, Nav } from "grommet";

// Buttons

import { SaveButton } from "../components/buttons/SaveButton";
import { HelpButton } from "../components/buttons/HelpButton";
import { HtmlButton } from "../components/buttons/HtmlButton";
import { EraseButton } from "../components/buttons/EraseButton";
import { DocumentsButton } from "../components/buttons/DocumentsButton";
import { HomeButton } from "../components/buttons/HomeButton";
import { AboutButton } from "../components/buttons/AboutButton";
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
          <HomeButton
            hoverIndicator
            editorState={editorState}
            setEditorState={setEditorState}
            documentTitle={documentTitle}
            setDocumentTitle={setDocumentTitle}
          />
          <AboutButton/>
          <DocumentsButton
            hoverIndicator
            editorState={editorState}
            setEditorState={setEditorState}
            documentTitle={documentTitle}
            setDocumentTitle={setDocumentTitle}
          />
          <HtmlButton
            editorState={editorState}
            setEditorState={setEditorState}
            documentTitle={documentTitle}
            setDocumentTitle={setDocumentTitle}
          />
          <EraseButton
            editorState={editorState}
            setEditorState={setEditorState}
            documentTitle={documentTitle}
            setDocumentTitle={setDocumentTitle}
          />
          <SaveButton
            hoverIndicator
            editorState={editorState}
            setEditorState={setEditorState}
            documentTitle={documentTitle}
            setDocumentTitle={setDocumentTitle}
          />
          <HelpButton
            hoverIndicator
            editorState={editorState}
            setEditorState={setEditorState}
            documentTitle={documentTitle}
            setDocumentTitle={setDocumentTitle}
          />
        </Nav>
      </Sidebar>
    </FontSizeProvider>
  );
};

export default SidebarContainer;
