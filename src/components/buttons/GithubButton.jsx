import { Box, Button } from "grommet";
import { Github } from "grommet-icons";

export const GithubButton = (props) => {
  return (
    <Box justify="start">
      <Button
        className="fadeButton"
        icon=<Github />
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
              Find us on Github
            </Box>
          ),
        }}
      />
    </Box>
  );
};
