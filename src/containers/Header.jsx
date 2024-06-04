import { Anchor, Header, Nav } from "grommet";
import { DarkModeToggle } from "../components/DarkModeToggle";


export const HeaderContainer = ({ darkMode, setDarkMode }) => (
  <Header pad="medium" background="background">
    <Nav direction="row">
      <Anchor label="Home" href="#" />
      <Anchor label="Profile" href="#" />
    </Nav>
    <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
  </Header>
);