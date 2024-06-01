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
      <Page kind="wide" background="background" height="100vh" flex="grow">
        <HeaderContainer darkMode={darkMode} setDarkMode={setDarkMode} />
        <Notepad />
        <FooterContainer />
      </Page>
    </Grommet>
  );
}

export default App
