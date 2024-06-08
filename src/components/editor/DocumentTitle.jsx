import { Box, TextInput } from "grommet";

export function DocumentTitle({ documentTitle, setDocumentTitle }) {

  const handleTitleChange = (event) => {
    setDocumentTitle(event.target.value);
  };

  return (
    <Box id="documentTitle">
      <TextInput id="Title" size="xlarge" focusIndicator={false} plain={true} value={documentTitle}  onChange={handleTitleChange} aria-label="Input Text" placeholder="Your Title"/>
    </Box>
  );
}
