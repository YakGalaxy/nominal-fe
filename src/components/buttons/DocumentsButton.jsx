import { Box, Button } from "grommet";
import { Projects } from "grommet-icons";
import { Link } from "react-router-dom";

// React Router

import { useLocation } from "react-router-dom";

export const DocumentsButton = () => {

        const location = useLocation();
        const isRootPath = location.pathname === "/documents";

  return (
    <Link to="/documents">
      <Button
        active={isRootPath}
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
