import { Box, Heading, Image } from "grommet";
// import { Notfound } from '../'
// Components
import SidebarContainer from "../../containers/Sidebar";

export const NotFoundPage = ({ editorState, setEditorState }) => {
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
        <Heading size="small" margin={{ bottom: "2.5vh" }}>
          Not Found Page
        </Heading>
        <Image src="../" alt="Not Found" fit="cover" />
      </Box>
    </Box>
  );
};
