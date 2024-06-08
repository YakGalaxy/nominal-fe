import { Box, Button } from "grommet";
import { Projects } from "grommet-icons";
import { Link } from "react-router-dom";

export const DocumentsButton = () => {

  return (
    <Link to="/documents">
      <Button
        icon=<Projects />
        onClick={() => {}}
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
              <Box>Your Documents</Box>
            </Box>
          ),
        }}
      />
    </Link>
  );
};
