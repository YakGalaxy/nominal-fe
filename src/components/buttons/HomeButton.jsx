import { Box, Button } from "grommet";
import { HomeRounded } from "grommet-icons";
import { Link } from "react-router-dom";

// React Router

import { useLocation } from "react-router-dom";

export const HomeButton = () => {

      const location = useLocation();
      const isRootPath = location.pathname === "/";

  return (
    <Link to="/">
      <Button
        active={isRootPath}
        icon=<HomeRounded />
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
              Head Home
            </Box>
          ),
        }}
      />
    </Link>
  );
};
