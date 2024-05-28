import './App.css'
import { grommet, Box, Heading, Grommet, Paragraph } from "grommet";

function App() {

  return (
    <Grommet theme={grommet}>
      <Box pad="small">
        <Heading>Hello World</Heading>
        <Paragraph>Hello from a Grommet page!</Paragraph>
      </Box>
    </Grommet>
  );
}

export default App
