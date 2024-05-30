import './App.css'
import { grommet, Grommet } from "grommet";
import Simple from "./containers/Footer";
import Notepad from './containers/Notepad';

function App() {
  
  return (
    <Grommet theme={grommet}>
      <Notepad />
      <Simple />
    </Grommet>
  );
}

export default App
