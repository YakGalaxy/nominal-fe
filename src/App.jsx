import './App.css'
import { DarkModeToggle } from './components/DarkModeToggle';
import { grommet, Grommet } from "grommet";
import { Simple }  from "./containers/Footer";
import { Notepad } from './containers/Notepad';
import { SaveButton } from './components/SaveButton';
import { HeaderContainer } from "./containers/Header";

function App() {
  
  return (

    <Grommet theme={grommet}>
      <HeaderContainer />
    <DarkModeToggle/>
      <Notepad />
      <SaveButton /> 
      <Simple />
    </Grommet>
  );
}

export default App
