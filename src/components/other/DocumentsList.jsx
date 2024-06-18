import { Box, Anchor } from "grommet";
import { DeleteButton } from "../buttons/DeleteButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const DocumentsList = ({ documents, onDelete }) => {

  const navigate = useNavigate();

  const handleDocumentClick = (docId) => {
    navigate(`/documents/${docId}`);
  };

  return (
    <Box>
      {documents.map((doc, index) => (
        <Box key={index} direction="row" align="center" pad="small">
          <Anchor
            weight="normal"
            label={doc.title}
            onClick={() => handleDocumentClick(doc.id)}
          ></Anchor>
          <DeleteButton docId={doc.id} onDelete={onDelete} />
        </Box>
      ))}
    </Box>
  );
};
