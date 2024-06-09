/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box } from "grommet";

// Components

import CopyEditor from "../components/editor/Editor";
import SidebarContainer from "./Sidebar";

// Notepad

export function Notepad({ editorState, setEditorState }) {

const [documentTitle, setDocumentTitle] = useState();

  return (
    <Box
      align="center"
      pad="small"
      direction="row"
      justify="center"
      margin="auto"
    >
      <SidebarContainer
        editorState={editorState}
        setEditorState={setEditorState}
        documentTitle={documentTitle}
        setDocumentTitle={setDocumentTitle}
      />
      <Box
        height="80vh"
        width="60vw"
        round="none"
        pad="medium"
        background="background-contrast"
        id="content-box"
      >
        <CopyEditor
          editorState={editorState}
          setEditorState={setEditorState}
          documentTitle={documentTitle}
          setDocumentTitle={setDocumentTitle}
        />
      </Box>
    </Box>
  );
}
