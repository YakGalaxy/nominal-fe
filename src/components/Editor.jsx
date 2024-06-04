import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { useState, useContext } from "react";
import { Box } from 'grommet';
import { FontSizeContext } from "../components/FontSizeProvider";

function CopyEditor() {
  const { fontSize } = useContext(FontSizeContext);
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

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
