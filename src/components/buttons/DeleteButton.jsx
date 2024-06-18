import { Box, Button } from "grommet";
import { Trash } from "grommet-icons";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";

export const DeleteButton = ({ docId, onDelete }) => {
  const deleteDocument = async () => {
    try {
      const response = await axios.delete(`${API_URL}/documents/${docId}`);
      console.log("Document deleted successfully");
      onDelete(docId); // Call the onDelete callback with the docId
    } catch (error) {
      console.log("Error deleting document", error);
    }
  };

  return (
    <Button
      className="delete-button"
      margin={{ left: "10px" }}
      icon={<Trash />}
      onClick={deleteDocument}
      tip={{
        plain: true,
        dropProps: { align: { bottom: "top" } },
        content: (
          <Box
            pad="xxsmall"
            elevation="small"
            background="#EDEDED" // no opacity
            round="xsmall"
            margin="xsmall"
            overflow="hidden"
            align="center"
          >
            <Box>Delete this document</Box>
          </Box>
        ),
      }}
    />
  );
};
