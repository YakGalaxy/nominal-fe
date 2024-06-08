import { Box, Heading } from "grommet";
import { useEffect } from "react";
import { getAllDocuments } from "../utilities/GetDocumentsData";
import { DocumentsList } from "../other/DocumentsList";
import { convertFromRaw } from "draft-js";

// Components
import SidebarContainer from "../../containers/Sidebar";

export const DocumentsPage = ({
  editorState,
  setEditorState,
  documents,
  setDocuments,
}) => {
  useEffect(() => {
    getAllDocuments(setDocuments);
  }, [setDocuments]);

  const handleDelete = (docId) => {
    setDocuments((prevDocuments) =>
      prevDocuments.filter((doc) => doc.id !== docId)
    );
  };

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
        <Heading margin="none">Documents Page</Heading>
        {documents.length > 0 ? (
          <DocumentsList documents={documents} onDelete={handleDelete} editorState={editorState} setEditorState={setEditorState} />
        ) : (
          <p>No documents available</p>
        )}
      </Box>
    </Box>
  );
};
