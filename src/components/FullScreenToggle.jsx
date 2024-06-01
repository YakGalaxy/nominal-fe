import React, { useState } from "react";
import { Expand } from "grommet-icons";
import { Button, Box } from "grommet";

export const FullScreenToggle = () => {
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
      <Button
      plain={false}
      icon={<Expand size="small" />}
      onClick={toggleFullscreen}
      tip={{
        plain: true,
        dropProps: { align: { bottom: 'top' } },
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
            Toggle Fullscreen
          </Box>
        ),
      }}
      />
  );
};
