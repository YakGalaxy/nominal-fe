/* eslint-disable react/prop-types */

import { useState, useContext, useEffect, useRef } from "react";
import { Box, Button } from "grommet";

// React WYSIWYG

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// Draft JS

import { EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js";
import "draft-js/dist/Draft.css";

// Other Editor Aspects

import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import draftToHtml from "draftjs-to-html";
// import { postDocumentData, getDocumentData } from "../components/UtilityFunctions";

// Supporting Components

import { DocumentTitle } from "./DocumentTitle";



// Initiliase Editor

function CopyEditor({ editorState, setEditorState }) {
  // Use global context for font sizing

  // const { fontSize } = useContext(FontSizeContext);

  // //  Set the Editor state
  //  const [editorState, setEditorState] = useState(() =>
  //    EditorState.createEmpty()
  //   );

  // Convert the Editor's content to HTML
  const [convertedContent, setConvertedContent] = useState(null);

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  // Clear Editor

  // const onClear = () => {
  //   setEditorState(EditorState.createEmpty());
  // };

  // Backend Sync

  // const onSave = async () => {
  //   const newMessage = {
  //     title: "Sample Title 5", // Replace with actual title
  //     description: "Sample Description", // Replace with actual description
  //     content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
  //   };

  //   try {
  //     await postDocumentData(newMessage);
  //     console.log("Succesfully sent new message to postDocumentData function", newMessage)
  //   } catch (error) {
  //     console.error("Error saving document", error);
  //   }
  // };

  // Component return

  return (
    <div>
      <Box fill="true">
        <DocumentTitle />
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          placeholder="Start typing..."
        />
      </Box>
      <div className="code-view">
        <p>HTML View </p>
        <textarea
          className="text-area"
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </div>
    </div>
  );
}

export default CopyEditor;
