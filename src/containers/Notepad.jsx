import React from "react";
import { Box } from "grommet";
import CopyEditor from "../components/Editor";
import { SidebarContainer } from "./Sidebar";



export function Notepad() {
  return (
    <Box align="center" pad="small" direction="row" justify="center" margin="auto">
      <SidebarContainer />
      <Box
        height="100%"
        round="none"
        pad="medium"
        background="background-front"
      >
        <CopyEditor />
      </Box>
    </Box>
  );
}


