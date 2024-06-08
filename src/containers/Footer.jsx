import { Footer, Text } from "grommet";
import { FullScreenToggle } from "../components/toggles/FullScreenToggle";
import { GithubButton } from "../components/buttons/GithubButton";


export const FooterContainer = () => (
  <Footer pad="medium" background="background" as="footer">
    <GithubButton />
    <Text textAlign="center" size="small">
      © 2024 - Nominal Text Editor
    </Text>
    <FullScreenToggle />
  </Footer>
);
