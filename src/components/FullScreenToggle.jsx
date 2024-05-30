import React from "react";
import { Expand } from "grommet-icons";
import { Box, Button} from "grommet";

export const Icon = () => (
  <Box align="center" pad="large">
    <Button plain={false} icon={<Expand />} onClick={() => {}} />
  </Box>
);

Icon.storyName = "Icon plain";

export default {
  title: `Controls/Button/Icon plain`,
};