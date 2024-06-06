import { EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import { useState, useContext, useEffect, useRef } from "react";
import { Box, Button } from 'grommet';
// import { FontSizeContext } from "../components/FontSizeProvider";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import draftToHtml from "draftjs-to-html";


// Initiliase Editor

function CopyEditor() {


  // Use global context for font sizing
  
  // const { fontSize } = useContext(FontSizeContext);


//  Set the Editor state
 const [editorState, setEditorState] = useState(() =>
   EditorState.createEmpty()
  );
  
// Convert the Editor's content to HTML
 const [convertedContent, setConvertedContent] = useState(null);

 useEffect(() => {
   let html = convertToHTML(editorState.getCurrentContent());
   setConvertedContent(html);
 }, [editorState]);


  // Focus the editor

// const editor = useRef(null);

//     useEffect(() => {
//       focusEditor();
//     }, []);

//     const focusEditor = () => {
//       editor.current.focus();
//     };

  
  
// Create HTML markup
  
// function createMarkup(html) {
//   return {
//     __html: DOMPurify.sanitize(html),
//   };
//   }
  
  
  // Handle key commands

    // const handleKeyCommand = (command) => {
    //   const newState = RichUtils.handleKeyCommand(editorState, command);
    //   if (newState) {
    //     setEditorState(newState);
    //     return true;
    //   }
    //   return false;
    // };
  
  
  // Inline Styles

  // const styleMap = {
  //   CODE: {
  //     backgroundColor: "rgba(0, 0, 0, 0.05)",
  //     fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
  //     fontSize: 16,
  //     padding: 2,
  //   },
  //   HIGHLIGHT: {
  //     backgroundColor: "#F7A5F7",
  //   },
  //   UPPERCASE: {
  //     textTransform: "uppercase",
  //   },
  //   LOWERCASE: {
  //     textTransform: "lowercase",
  //   },
  //   CODEBLOCK: {
  //     fontFamily: '"fira-code", "monospace"',
  //     fontSize: "inherit",
  //     background: "#ffeff0",
  //     fontStyle: "italic",
  //     lineHeight: 1.5,
  //     padding: "0.3rem 0.5rem",
  //     borderRadius: " 0.2rem",
  //   },
  //   SUPERSCRIPT: {
  //     verticalAlign: "super",
  //     fontSize: "80%",
  //   },
  //   SUBSCRIPT: {
  //     verticalAlign: "sub",
  //     fontSize: "80%",
  //   },
  // };
  
  // Block Styles
  
  // const myBlockStyleFn = (contentBlock) => {
  //   const type = contentBlock.getType();
  //   switch (type) {
  //     case "blockQuote":
  //       return "superFancyBlockquote";
  //     case "leftAlign":
  //       return "leftAlign";
  //     case "rightAlign":
  //       return "rightAlign";
  //     case "centerAlign":
  //       return "centerAlign";
  //     case "justifyAlign":
  //       return "justifyAlign";
  //     default:
  //       break;
  //   }
  // };
  
  // Clear Editor
  
  const onClear = () => {
    setEditorState(EditorState.createEmpty());
  };


  // Backend Sync

 const onSave = async () => {
   const newMessage = {
     message: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
   };

   //api call here with newMessage as request body
 };
 

  return (
    <div>
      <Box width="large" height="large">
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          placeholder="The message goes here..."
          // handleKeyCommand={handleKeyCommand}
          // customStyleMap={styleMap}
          // blockStyleFn={myBlockStyleFn}
          // blockRenderMap={this.extendedBlockRenderMap}
        />
      </Box>
      <Box>
        <Button label="Clear" onClick={onClear} />
      </Box>
      <Box>
        <Button label="Save" onClick={onSave} />
      </Box>
      <div className="code-view">
        <p>HTML View </p>
        <textarea
          className="text-area"
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </div>
    </div>
  );
}

export default CopyEditor;
