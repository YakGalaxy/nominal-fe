import React, { useState } from "react";
import { grommet, Grommet, Page } from "grommet";
import { FooterContainer } from "./containers/Footer";
import { Notepad } from "./containers/Notepad";
import { HeaderContainer } from "./containers/Header";
import { FontSizeProvider } from "./components/FontSizeProvider";
import "./index.css";
import "./App.css"; 

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Grommet
      theme={grommet}
      cssVars={true}
      themeMode={darkMode ? "dark" : "light"}
      background="background"
    >
      <FontSizeProvider>
        <Page kind="wide" background="background" height="100vh" flex="grow">
          <HeaderContainer darkMode={darkMode} setDarkMode={setDarkMode} />
          <Notepad />
          <FooterContainer />
        </Page>
      </FontSizeProvider>
    </Grommet>
  );
}

export default App;
