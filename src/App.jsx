import { useState } from "react";
import { grommet, Grommet, Page } from "grommet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Containers

import { FooterContainer } from "./containers/Footer";
import { Notepad } from "./containers/Notepad";
import { HeaderContainer } from "./containers/Header";

// Editor Components

import { HTMLPreview } from "./components/editor/HTMLPreview";
import { EditorState } from "draft-js";

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
    const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty()
    );

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
            <Route
              path="/"
              element={
                <Notepad
                  editorState={editorState}
                  setEditorState={setEditorState}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/help"
              element={
                <HelpPage
                  editorState={editorState}
                  setEditorState={setEditorState}
                />
              }
            />
            <Route
              path="/SettingsPage"
              element={
                <SettingsPage
                  editorState={editorState}
                  setEditorState={setEditorState}
                />
              }
            />
            <Route
              path="/preview"
              element={
                <HTMLPreview
                  editorState={editorState}
                  setEditorState={setEditorState}
                />
              }
            />
            <Route
              path="*"
              element={
                <NotFoundPage
                  editorState={editorState}
                  setEditorState={setEditorState}
                />
              }
            />
          </Routes>
          <FooterContainer />
        </Page>
      </Router>
    </Grommet>
  );
}

export default App;
