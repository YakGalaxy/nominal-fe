import './App.css'
import { DarkModeToggle } from './components/DarkModeToggle';
import { grommet, Grommet, Page, Box } from "grommet";
import { FooterContainer }  from "./containers/Footer";
import { Notepad } from './containers/Notepad';
import { SaveButton } from './components/SaveButton';
import { HeaderContainer } from "./containers/Header";
import { SidebarContainer } from './containers/Sidebar';
import { TextResizeToggle}  from './components/TextResizeToggle';

function App() {
  
  return (
    <Grommet theme={grommet}>
      <Page kind="full">
        <HeaderContainer />
        <DarkModeToggle />
        <TextResizeToggle/>
          <Notepad />
        <SaveButton />
        <FooterContainer />
      
      </Page>
    </Grommet>
  );
}

export default App
