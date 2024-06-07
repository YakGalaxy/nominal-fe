import { Footer, Text } from "grommet";
import { FullScreenToggle } from "../components/FullScreenToggle";
import { GithubButton } from "../components/GithubButton";


export const FooterContainer = () => (
  <Footer pad="medium" background="background" as="footer">
    <GithubButton />
    <Text textAlign="center" size="small">
      © 2024 - Nominal Text Editor
    </Text>
    <FullScreenToggle />
  </Footer>
);
