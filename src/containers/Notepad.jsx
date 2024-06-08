/* eslint-disable react/prop-types */
import { Box } from "grommet";

// Components

import CopyEditor from "../components/editor/Editor";
import SidebarContainer from "./Sidebar";

// Notepad

export function Notepad({ editorState, setEditorState }) {

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
