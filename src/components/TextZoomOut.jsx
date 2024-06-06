import React, { useContext } from "react";
import { Button, Box } from "grommet";
import { ZoomOut as ZoomOutIcon } from "grommet-icons";
import { FontSizeContext } from "./FontSizeProvider";

const TextZoomOut = () => {
  const { fontSize, setFontSize } = useContext(FontSizeContext);

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 8);
    console.log("Decreasing font size to:", newSize);
    setFontSize(newSize);
  };

  return (
    <Box align="center">
      <Button plain icon={<ZoomOutIcon />} onClick={decreaseFontSize} />
    </Box>
  );
};

export default TextZoomOut;