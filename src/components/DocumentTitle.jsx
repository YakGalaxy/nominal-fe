import { React, useState } from 'react'
import { Box, TextInput } from "grommet";

export function DocumentTitle() {

const [value, setValue] = useState('');
const onChange = (event) => setValue(event.target.value);

  return (
      <Box>
          <TextInput id="Title" size="xlarge" focusIndicator={false} plain={true} value={value} onChange={onChange} aria-label="Input Text" placeholder="Your Title"/>
    </Box>
  );
}
