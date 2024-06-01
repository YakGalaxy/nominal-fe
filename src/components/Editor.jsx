import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { useState } from "react";
import { Box } from 'grommet';

function CopyEditor() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  // const editorRef = useRef(null);

  // const focus = () => {
  //   editorRef.current.focus();
  // };

  return (
    <>
      <Box width="large" height="large">
        <div style={styles.root}>
          <div style={styles.editor}>
            <Editor
              editorState={editorState}
              onChange={setEditorState}
              placeholder="Enter some text..."
              // ref={editorRef}
            />
          </div>
          <input
            onClick={() => console.log(editorState)}
            style={styles.button}
            type="button"
            value="Log State"
          />
        </div>
      </Box>
    </>
  );
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
