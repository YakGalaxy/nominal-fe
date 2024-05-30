import './App.css'
import DarkModeToggle from './components/DarkModeToggle';
import { grommet, Grommet } from "grommet";
import Simple from "./containers/Footer";
import Notepad from './containers/Notepad';
import { SaveButton } from './components/SaveButton';

function App() {
  
  return (

    <Grommet theme={grommet}>
    <DarkModeToggle/>
      <Notepad />
      <SaveButton /> 
      <Simple />
    </Grommet>
  );
}

export default App
