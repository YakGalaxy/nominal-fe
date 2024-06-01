import './App.css'
import { grommet, Grommet, Page, Box, Main } from "grommet";
import { FooterContainer }  from "./containers/Footer";
import { Notepad } from './containers/Notepad';
import { SaveButton } from './components/SaveButton';
import { HeaderContainer } from "./containers/Header";
<<<<<<< HEAD
import { SidebarContainer } from './containers/Sidebar';
import { TextResizeToggle}  from './components/TextResizeToggle';
=======
>>>>>>> 645510544455203fffce61489e89093049f984a1

function App() {
  
  return (
    <Grommet theme={grommet} cssVars={true}>
      <HeaderContainer />
      <Page background="black" kind="full" fill="vertical" flex="grow">
        <Main align='center' justify='center'>
          <Notepad />
        </Main>
      </Page>
      <FooterContainer />
    </Grommet>
  );
}

export default App
