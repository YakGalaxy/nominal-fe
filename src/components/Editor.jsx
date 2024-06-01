import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { useState } from "react";
import  { TextResizeToggle } from "../components/TextResizeToggle"

import { Box } from 'grommet';

function CopyEditor() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [fontSize, setFontSize] = useState(16);
  

  const logState = () => {
    console.log(editorState.toJS());
  };
  return (
    <Box width="large" height="large">
       <div style={{ ...styles.editor, fontSize: `${fontSize}px` }} >
        <div style={styles.editor}>
          <Editor
            editorState={editorState}
            onChange={setEditorState}
            placeholder="Enter some text..."
          />  
        </div>
        <input
          onClick={logState}
          style={{ ...styles.button, fontSize: `${fontSize}px` }}
          type="button"
          value="Log State"
        />
        <TextResizeToggle fontSize={fontSize} setFontSize={setFontSize} />
      </div>
      </Box>
  )
}

const styles = {
  root: {
    fontFamily: "'Helvetica', sans-serif",
  },
  editor: {
    cursor: "text",
  },
  button: {
    marginTop: 10,
    textAlign: "center",
  },
};

export default CopyEditor;
