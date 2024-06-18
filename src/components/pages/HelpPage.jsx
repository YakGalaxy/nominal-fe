import { Box, Heading } from "grommet";

// Components

import SidebarContainer from "../../containers/Sidebar";

export const HelpPage = ({ editorState, setEditorState }) => {
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
        <Heading
          color="rgb(170, 170, 170)"
          size="small"
          margin={{ bottom: "2.5vh" }}
        >
          Help
        </Heading>
      </Box>
    </Box>
  );
};
