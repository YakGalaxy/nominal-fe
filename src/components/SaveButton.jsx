import React from 'react'
import { Box, Button } from "grommet";
import { Save } from "grommet-icons";

export const SaveButton = (props) => {
  return (
    <Button
      icon=<Save />
      onClick={() => {}}
      {...props}
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
            Save Document
          </Box>
        ),
      }}
    />
  );
}
