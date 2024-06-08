import { Box } from "grommet";
import CopyEditor from "../components/Editor";
import SidebarContainer from "./Sidebar";
import { useState } from "react";
import { EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js";

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


