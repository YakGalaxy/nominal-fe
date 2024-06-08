import { Box, Button } from "grommet";
import { Help } from "grommet-icons";
import { NavLink } from "react-router-dom";

// React Router

import { useLocation } from "react-router-dom";

export const HelpButton = () => {

      const location = useLocation();
      const isRootPath = location.pathname === "/help";

  return (
    <NavLink to="/help" style={{ textDecoration: "none" }}>
      <Button
        active={isRootPath}
        icon=<Help />
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
              Help
            </Box>
          ),
        }}
      />
    </NavLink>
  );
}
