/* eslint-disable react/prop-types */
import "./DarkModeToggle.css";
import { Box, Button } from "grommet";
import { Moon, Sun } from "grommet-icons";

export const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <Box justify="end">
      <Button
        className="no-fade"
        plain
        icon={darkMode ? <Moon /> : <Sun />}
        id="DarkModeToggle"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      />
    </Box>
  );
};
