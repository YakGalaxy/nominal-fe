import React, { useContext } from "react";
import { Button, Box } from "grommet";
import { ZoomIn as ZoomInIcon } from "grommet-icons";
import { FontSizeContext } from "./FontSizeProvider";

const TextZoomIn = () => {
  const { fontSize, setFontSize } = useContext(FontSizeContext);

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 36);
    console.log("Increasing font size to:", newSize);
    setFontSize(newSize);
  };

  return (
    <Box align="center">
      <Button disabled plain icon={<ZoomInIcon />} onClick={increaseFontSize} />
    </Box>
  );
};

export default TextZoomIn;
