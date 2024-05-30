import React from "react";
import { Box } from "grommet";
import MyEditor from "../components/FormattingBar";


function Notepad() {
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
          <MyEditor />
    </Box>
  </Box>
  )
}

export default Notepad


