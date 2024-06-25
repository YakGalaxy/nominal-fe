import { Box, Button } from "grommet";
import { User } from "grommet-icons";
import { NavLink } from "react-router-dom";

// React Router

import { useLocation } from "react-router-dom";

export const AboutButton = () => {

      const location = useLocation();
      const isRootPath = location.pathname === "/about";

  return (
    <NavLink to="/about" style={{ textDecoration: "none" }}>
      <Button
        active={isRootPath}
        icon=<User />
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
              About us
            </Box>
          ),
        }}
      />
    </NavLink>
  );
}
