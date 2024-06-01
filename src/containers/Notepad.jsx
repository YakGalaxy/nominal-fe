import React from "react";
import { Box } from "grommet";
import { CopyEditor } from "../components/Editor";
import { SidebarContainer } from "./Sidebar";



export function Notepad() {
  return (
    <Box align="center" pad="large" direction="row" justify="center">
      <SidebarContainer />
      <Box
        width="large"
        height="large"
        round="none"
        align="center"
        justify="center"
        background="light-6"
      >
        Notepad Container
        <CopyEditor />
      </Box>
    </Box>
  );
}


