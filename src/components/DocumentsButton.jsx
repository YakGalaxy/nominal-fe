import React from "react";
import { Box, Button } from "grommet";
import { Projects } from "grommet-icons";

export const DocumentsButton = () => {

  return (
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
            Your Documents
          </Box>
        ),
      }}
    />
  );
};
