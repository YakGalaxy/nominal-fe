import { Footer, Text } from "grommet";
import { FullScreenToggle } from "../components/FullScreenToggle";


export const FooterContainer = () => (
  <Footer pad="small" flex="grow" background="background-back">
    <Text textAlign="center" size="small">
      © 2024 Footer Container
    </Text>
    <FullScreenToggle />
  </Footer>
);
