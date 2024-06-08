import React, { useState } from "react";
import { grommet, Grommet, Page } from "grommet";
import { FooterContainer } from "./containers/Footer";
import { Notepad } from "./containers/Notepad";
import { HeaderContainer } from "./containers/Header";
import { HTMLPreview } from "./components/HTMLPreview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "./components/NotFoundPage"
import { AboutPage } from "./components/AboutPage"
import { SettingsPage } from "./components/SettingsPage";
import { HelpPage } from "./components/HelpPage";
// import { FontSizeProvider } from "./components/FontSizeProvider";
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
      <Router>
        <Page kind="wide" background="background" height="100vh" flex="grow">
          <HeaderContainer darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<Notepad/>} />
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/help" element={<HelpPage/>}/>
            <Route path="/SettingsPage" element={<SettingsPage/>} />
            <Route path="/preview" element={<HTMLPreview/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
          <FooterContainer />
        </Page>
      </Router>
    </Grommet>
  );
}

export default App;
