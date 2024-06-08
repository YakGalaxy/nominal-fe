import { useState, useEffect} from "react";
import { Box, Heading } from "grommet";

// Components

import SidebarContainer from "../../containers/Sidebar";

// Draft JS

import { EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js";
import "draft-js/dist/Draft.css";

// Other Editor Aspects

import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import draftToHtml from "draftjs-to-html";


export const HTMLPreview = ({ editorState, setEditorState }) => {
  // Convert the Editor's content to HTML
  const [convertedContent, setConvertedContent] = useState(null);

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

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
        <Heading margin="none">HTML Preview Page</Heading>
        <div className="code-view">
          <p>HTML View </p>
          <textarea
            className="text-area"
            disabled
            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          />
        </div>
      </Box>
    </Box>
  );
};
