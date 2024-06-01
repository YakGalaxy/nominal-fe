import { Footer, Text } from "grommet";
import { FullScreenToggle } from "../components/FullScreenToggle";


export const FooterContainer = () => (
  <Footer background="dark-1" pad="medium" flex="grow">
      <Text textAlign="center" size="small">
        © 2024 Footer Container
      </Text>
    <FullScreenToggle />
  </Footer>
);
