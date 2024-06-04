import { EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { useState, useContext, useEffect } from "react";
import { Box } from 'grommet';
import { FontSizeContext } from "../components/FontSizeProvider";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";

function CopyEditor() {
  const { fontSize } = useContext(FontSizeContext);
 const [editorState, setEditorState] = useState(() =>
   EditorState.createEmpty()
 );
 const [convertedContent, setConvertedContent] = useState(null);

 useEffect(() => {
   let html = convertToHTML(editorState.getCurrentContent());
   setConvertedContent(html);
 }, [editorState]);

function createMarkup(html) {
  return {
    __html: DOMPurify.sanitize(html),
  };
}

  return (
    <Box width="large" height="large">
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(convertedContent)}
      ></div>
    </Box>
  );
}

export default CopyEditor;
