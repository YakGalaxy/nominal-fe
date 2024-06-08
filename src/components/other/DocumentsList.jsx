import { Box, Text } from "grommet";
import { DeleteButton } from "../buttons/DeleteButton";

export const DocumentsList = ({ documents, onDelete }) => {
  return (
    <Box>
      {documents.map((doc, index) => (
        <Box
          key={index}
          direction="row"
          align="center"
          justify="between"
          pad="small"
          border={{ bottom: "1px solid #ddd" }}
        >
          <Text>{doc.title}</Text>
          <DeleteButton docId={doc.id} onDelete={onDelete} />
        </Box>
      ))}
    </Box>
  );
};
