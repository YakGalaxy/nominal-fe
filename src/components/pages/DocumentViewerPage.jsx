import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading } from "grommet";
import CopyEditor from "../editor/Editor";

// Components
import SidebarContainer from "../../containers/Sidebar";


export const DocumentViewer = ({
  documents,
  editorState,
  setEditorState,
  documentTitle,
  setDocumentTitle,
}) => {
  const { id } = useParams();
  const document = documents.find((doc) => doc.id.toString() === id);

  useEffect(() => {
    if (document) {
      setEditorState(document.content);
      setDocumentTitle(document.title);
    }
  }, [document, setEditorState, setDocumentTitle]);

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
        id="content-box"
      >
        {document && (
          <CopyEditor
            editorState={editorState}
            setEditorState={setEditorState}
            documentTitle={documentTitle}
            setDocumentTitle={setDocumentTitle}
          />
        )}
      </Box>
    </Box>
  );
};
