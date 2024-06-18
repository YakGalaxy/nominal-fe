/* eslint-disable react/prop-types */
import { Box, Button } from "grommet";
import { Erase } from "grommet-icons";
import { EditorState } from "draft-js";

export const EraseButton = ({ editorState, setEditorState }) => {
  const onClear = () => {
    setEditorState(EditorState.createEmpty());
  };

  return (
    <Button
      icon=<Erase />
      onClick={onClear}
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
            Clear Editor
          </Box>
        ),
      }}
    />
  );
};
