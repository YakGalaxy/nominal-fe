import { Box, Button } from "grommet";
import { Save } from "grommet-icons";

// Utility Functions

import {
  postDocumentData,
  getDocumentData,
} from "../utilities/UtilityFunctions";

// Draft JS

import { EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js";

// React Router

import { useLocation } from "react-router-dom";

export const SaveButton = ({ editorState, setEditorState }) => {
  
    const location = useLocation();
    const isRootPath = location.pathname === "/";

  const onSave = async () => {
    const newMessage = {
      title: "Sample Title 5", // Replace with actual title
      description: "Sample Description", // Replace with actual description
      content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
    };

    try {
      await postDocumentData(newMessage);
      console.log(
        "Succesfully sent new message to postDocumentData function",
        newMessage
      );
    } catch (error) {
      console.error("Error saving document", error);
    }
  };
  
  return (
    <Button
      disabled={!isRootPath}
      icon=<Save />
      onClick={onSave}
      tip={{
        plain: true,
        dropProps: { align: { bottom: "top" } },
        content: (
          <Box
            pad="xxsmall"
            elevation="small"
            background="#EDEDED" // no opacity
            round="xsmall"
            margin="xsmall"
            overflow="hidden"
            align="center"
          >
            Save Document
          </Box>
        ),
      }}
    />
  );
};
