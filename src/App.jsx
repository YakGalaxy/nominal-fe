import './App.css'
import { DarkModeToggle } from './components/DarkModeToggle';
import { grommet, Grommet } from "grommet";
import { FooterContainer }  from "./containers/Footer";
import { Notepad } from './containers/Notepad';
import { SaveButton } from './components/SaveButton';
import { HeaderContainer } from "./containers/Header";
import { SidebarContainer } from './containers/Sidebar';

function App() {
  
  return (

    <Grommet theme={grommet}>
      <HeaderContainer />
    <DarkModeToggle/>
      <Notepad />
      <SidebarContainer />
      <SaveButton /> 
      <FooterContainer />
    </Grommet>
  );
}

export default App
