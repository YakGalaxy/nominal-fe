import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { useState } from "react";
import  { TextResizeToggle } from "../components/TextResizeToggle"


function CopyEditor() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [fontSize, setFontSize] = useState(16);
  

  const logState = () => {
    console.log(editorState.toJS());
  };
  return (
    <>
    
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
    </>
  );
}

const styles = {
  root: {
    fontFamily: "'Helvetica', sans-serif",
    padding: 20,
    width: 600,
  },
  editor: {
    border: "1px solid #ccc",
    cursor: "text",
    minHeight: 80,
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: "center",
  },
};

export default CopyEditor;
