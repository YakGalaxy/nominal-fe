import React, { useContext, useState, useEffect, useCallback } from "react";
import { Editor, EditorState, Modifier, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import { Box } from "grommet";
import { FontSizeContext } from "./FontSizeProvider";

function CopyEditor() {
  const { fontSize } = useContext(FontSizeContext);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  // Create a custom style map for font sizes from 8px to 36px
  const customStyleMap = {};
  for (let i = 8; i <= 36; i += 2) {
    customStyleMap[`FONT_SIZE_${i}`] = {
      fontSize: `${i}px`,
    };
  }

  // Function to apply font size to the entire content
  const applyFontSize = useCallback((editorState, fontSize) => {
    const selectionState = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const newContentState = Modifier.applyInlineStyle(
      contentState,
      selectionState.merge({
        anchorOffset: 0,
        focusOffset: contentState.getPlainText("").length,
      }),
      `FONT_SIZE_${fontSize}`
    );
    return EditorState.push(
      editorState,
      newContentState,
      "change-inline-style"
    );
  }, []);

  // Effect to apply font size whenever it changes
  useEffect(() => {
    setEditorState((prevState) => applyFontSize(prevState, fontSize));
  }, [fontSize, applyFontSize]);

  // Handle editor state change to apply current font size to new text
  const handleEditorChange = (state) => {
    const currentStyle = `FONT_SIZE_${fontSize}`;
    const nextContentState = Modifier.applyInlineStyle(
      state.getCurrentContent(),
      state.getSelection(),
      currentStyle
    );
    const nextEditorState = EditorState.push(
      state,
      nextContentState,
      "change-inline-style"
    );
    setEditorState(nextEditorState);
  };

  const logState = () => {
    console.log(editorState.toJS());
  };

  return (
    <Box width="large" height="large">
      <div style={{ ...styles.editor }}>
        <Editor
          editorState={editorState}
          onChange={handleEditorChange}
          placeholder="Enter some text..."
          customStyleMap={customStyleMap}
        />
        <input
          onClick={logState}
          style={{ ...styles.button, fontSize: `${fontSize}px` }}
          type="button"
          value="Log State"
        />
      </div>
    </Box>
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
