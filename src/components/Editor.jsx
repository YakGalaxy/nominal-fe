import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { useState } from "react";
import { Box } from "grommet";

function CopyEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
      <Editor editorState={editorState} onChange={setEditorState} />
  );
}

export default CopyEditor;