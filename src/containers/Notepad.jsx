/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box } from "grommet";

// Components

import CopyEditor from "../components/editor/Editor";
import SidebarContainer from "./Sidebar";

// Draft JS

import { EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js";

// Notepad

export function Notepad() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

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
      />
      <Box
        height="80vh"
        width="60vw"
        round="none"
        pad="medium"
        background="background-contrast"
      >
        <CopyEditor editorState={editorState} setEditorState={setEditorState} />
      </Box>
    </Box>
  );
}
