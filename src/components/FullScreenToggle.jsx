import React, { useState } from "react";
import { Expand } from "grommet-icons";
import { Box, Button } from "grommet";

const FullScreenToggle = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch((err) =>
          console.error(
            `Error attempting to enable fullscreen mode: ${err.message}`
          )
        );
    } else {
      document
        .exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch((err) =>
          console.error(
            `Error attempting to exit fullscreen mode: ${err.message}`
          )
        );
    }
  };

  return (
    <Box align="center" pad="large">
      <Button
        plain={false}
        icon={<Expand />}
        onClick={toggleFullscreen}
      />
    </Box>
  );
};

export default FullScreenToggle;
