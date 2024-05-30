import './App.css'
import DarkModeToggle from './components/Dark-Mode-Toggle';
import { grommet, Grommet } from "grommet";
import Simple from "./containers/Footer";
import Notepad from './containers/Notepad';

function App() {
  
  return (

    <Grommet theme={grommet}>
    <DarkModeToggle/>
      <Notepad />
      <Simple />
    </Grommet>
  );
}

export default App
