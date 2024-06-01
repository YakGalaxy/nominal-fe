import  { useState } from "react";
import './DarkModeToggle.css';
import { Box, Button, Text } from "grommet";
import { Moon, Sun } from "grommet-icons";

export const DarkModeToggle = ({darkMode, setDarkMode}) => {

  return (
    <Box justify="end">
    <Button
      plain
      icon={darkMode ? <Moon /> : <Sun />}
      onClick={() => setDarkMode(!darkMode)}
      />
      </Box>
  );
}


    // <div className="DarkModeToggle">
    //   <h1 className="title">Hello</h1>
    //   <div className="box">
    //     <h2>Random Box</h2>
    //   </div>
    // </div>;