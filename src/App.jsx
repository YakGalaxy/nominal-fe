import './App.css'
import { grommet, Grommet, Page, Box } from "grommet";
import { FooterContainer }  from "./containers/Footer";
import { Notepad } from './containers/Notepad';
import { SaveButton } from './components/SaveButton';
import { HeaderContainer } from "./containers/Header";

function App() {
  
  return (
    <Grommet theme={grommet}>
      <Page kind="full">
        <HeaderContainer />
          <Notepad />
        <SaveButton />
        <FooterContainer />
      </Page>
    </Grommet>
  );
}

export default App
