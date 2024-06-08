import React from "react";
import { Box, Button } from "grommet";
import { Html5 } from "grommet-icons";
import { NavLink } from "react-router-dom";

export const HtmlButton = (props) => {
  return (
    <NavLink to="/preview" style={{ textDecoration: 'none' }}>
    <Button
    
      icon=<Html5 />
      onClick={() => {}}
      {...props}
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
            Convert to HTML
          </Box>
        ),
      }}
    />
       </NavLink>
  );
};
