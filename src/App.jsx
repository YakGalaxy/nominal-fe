import './App.css'
import { grommet, Grommet } from "grommet";
import Simple from "./containers/Footer";

function App() {
  
  return (
    <Grommet theme={grommet}>
      <Simple />
    </Grommet>
  );
}

export default App
