import React from 'react'
import { Box, Button } from "grommet";
import { Help } from "grommet-icons";

export const HelpButton = () => {
  return (
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
  );
}
