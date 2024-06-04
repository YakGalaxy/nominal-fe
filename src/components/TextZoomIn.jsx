import React, { useContext } from "react";
import { Button } from "grommet";
import { ZoomIn as ZoomInIcon } from "grommet-icons";
import { FontSizeContext } from "./FontSizeProvider";

const TextZoomIn = () => {
  const { fontSize, setFontSize } = useContext(FontSizeContext);

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 36);
    console.log("Increasing font size to:", newSize);
    setFontSize(newSize);
  };

  return <Button plain icon={<ZoomInIcon />} onClick={increaseFontSize} />;
};

export default TextZoomIn;
