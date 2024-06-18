import { Box, Button } from "grommet";
import { Github } from "grommet-icons";
import { Link } from "react-router-dom";

export const GithubButton = (props) => {
  return (
    <a
      href="https://github.com/YakGalaxy/nominal-fe"
      target="_blank"
      rel="noopener"
    >
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
    </a>
  );
};
