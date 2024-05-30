import React from "react";
import { Box, Footer, Main, Text } from "grommet";
import { Icon } from "../components/Full-Screen-Toggle";


export const Simple = () => (
  <Box>
    <Main background="dark-3" elevation="large" pad="large" gap="large">
      <Text margin="small" size="xsmall">
        Main Content
      </Text>
      <Box flex />
    </Main>
    <Footer background="dark-1" justify="center" pad="small">
      <Text textAlign="center" size="small">
        © 2024
            </Text>
    <Icon />
    </Footer>
  </Box>
);

export default Simple;