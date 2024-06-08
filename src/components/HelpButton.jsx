import React from 'react'
import { Box, Button } from "grommet";
import { Help } from "grommet-icons";
import { NavLink } from "react-router-dom";

export const HelpButton = () => {
  return (
    <NavLink to="/help" style={{ textDecoration: 'none' }}>
    <Button
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
