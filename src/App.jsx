import { useState } from "react";
import { grommet, Grommet, Page } from "grommet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Containers

import { FooterContainer } from "./containers/Footer";
import { Notepad } from "./containers/Notepad";
import { HeaderContainer } from "./containers/Header";

// Editor Components

import { HTMLPreview } from "./components/editor/HTMLPreview";

// Pages

import { NotFoundPage } from "./components/pages/NotFoundPage"
import { AboutPage } from "./components/pages/AboutPage";
import { SettingsPage } from "./components/pages/SettingsPage";
import { HelpPage } from "./components/pages/HelpPage";

// Styling

import "./index.css";
import "./App.css";

// Application

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
