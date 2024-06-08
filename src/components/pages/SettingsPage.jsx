import { Box, Heading } from "grommet";

// Components

import SidebarContainer from "../../containers/Sidebar";

export const SettingsPage = ({ editorState, setEditorState }) => {
  return (
    <Box
      align="center"
      pad="small"
      direction="row"
      justify="center"
      margin="auto"
    >
      <SidebarContainer
        editorState={editorState}
        setEditorState={setEditorState}
      />
      <Box
        height="80vh"
        width="60vw"
        round="none"
        pad="medium"
        background="background-contrast"
      >
        <Heading margin="none">Help Page</Heading>
      </Box>
    </Box>
  );
};
