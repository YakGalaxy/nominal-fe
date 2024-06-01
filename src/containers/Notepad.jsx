import React from "react";
import { Box } from "grommet";
import { CopyEditor } from "../components/Editor";



export function Notepad() {
  return (
    <Box align='center' pad="large">
    <Box
      width="large"
      height="large"
      round="none"
      align="center"
      justify="center"
      background="brand"
    >
          Notepad Container
          <CopyEditor />
    </Box>
  </Box>
  )
}


