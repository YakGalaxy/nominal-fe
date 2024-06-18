import { Footer, Text } from "grommet";
import { FullScreenToggle } from "../components/toggles/FullScreenToggle";
import { GithubButton } from "../components/buttons/GithubButton";


export const FooterContainer = () => (
  <Footer pad="medium" background="background" as="footer">
    <GithubButton />
    <Text color="rgb(170, 170, 170)" textAlign="center" size="small">
      © 2024 - Nominal Text Editor
    </Text>
    <FullScreenToggle />
  </Footer>
);
