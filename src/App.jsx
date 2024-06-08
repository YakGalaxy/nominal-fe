import { useState } from "react";
import { grommet, Grommet, Page } from "grommet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EditorState } from "draft-js";

// Containers
import { FooterContainer } from "./containers/Footer";
import { Notepad } from "./containers/Notepad";
import { HeaderContainer } from "./containers/Header";

// Pages
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { AboutPage } from "./components/pages/AboutPage";
import { SettingsPage } from "./components/pages/SettingsPage";
import { HelpPage } from "./components/pages/HelpPage";
import { DocumentsPage } from "./components/pages/DocumentsPage";
import { DocumentViewer } from "./components/pages/DocumentViewerPage";
import { HTMLPreview } from "./components/editor/HTMLPreview"

// Styling
import "./index.css";
import "./App.css";

// Application
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [documents, setDocuments] = useState([]);
  const [documentTitle, setDocumentTitle] = useState("");

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
            <Route
              path="/documents"
              element={
                <DocumentsPage
                  editorState={editorState}
                  setEditorState={setEditorState}
                  documents={documents}
                  setDocuments={setDocuments}
                />
              }
            />
            <Route
              path="/documents/:id"
              element={
                <DocumentViewer
                  documents={documents}
                  editorState={editorState}
                  setEditorState={setEditorState}
                  documentTitle={documentTitle}
                  setDocumentTitle={setDocumentTitle}
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
              path="/settings"
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
