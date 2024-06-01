import './App.css'
import { grommet, Grommet, Page, Box, Main } from "grommet";
import { FooterContainer }  from "./containers/Footer";
import { Notepad } from './containers/Notepad';
import { SaveButton } from './components/SaveButton';
import { HeaderContainer } from "./containers/Header";
import { TextResizeToggle } from './components/TextResizeToggle';
import { DarkModeToggle } from './components/DarkModeToggle';

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
      <FooterContainer />
    </Grommet>
  );
}

export default App
