import { Anchor, Header, Nav } from "grommet";
import { DarkModeToggle } from "../components/toggles/DarkModeToggle";


export const HeaderContainer = ({ darkMode, setDarkMode }) => (
  <Header pad="medium" background="background">
    <Nav direction="row"></Nav>
    <DarkModeToggle
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  </Header>
);