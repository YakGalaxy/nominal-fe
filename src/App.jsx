import './App.css'
import { grommet, Grommet, Page, Box, Main } from "grommet";
import { FooterContainer }  from "./containers/Footer";
import { Notepad } from './containers/Notepad';
import { HeaderContainer } from "./containers/Header";

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
