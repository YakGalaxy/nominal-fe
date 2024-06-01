import './App.css'
import { grommet, Grommet, Page, Box, Main } from "grommet";
import { FooterContainer }  from "./containers/Footer";
import { Notepad } from './containers/Notepad';
import { HeaderContainer } from "./containers/Header";
import { useState } from 'react';

function App() {
  
const [darkMode, setDarkMode] = useState(false);


  return (
    <Grommet
      theme={grommet}
      cssVars={true}
      themeMode={darkMode ? "dark" : "light"}
      background="background"
    >
      <Page kind="full" background="background">
        <HeaderContainer darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main align="center" justify="center">
          <Notepad />
        </Main>
        <FooterContainer />
      </Page>
    </Grommet>
  );
}

export default App
