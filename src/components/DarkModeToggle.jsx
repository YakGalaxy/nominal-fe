import  { useState } from "react";
import './DarkModeToggle.css';
import { Box, Button, Text } from "grommet";
import { Moon, Sun } from "grommet-icons";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      console.log("dark data-theme set");
    } else {
      document.documentElement.removeAttribute('data-theme');
      console.log("data-theme removed");
    }
  };


  return (
    <Button
      plain
      icon={isDark ? <Moon /> : <Sun />}
      onClick={toggleDarkMode}
    />
  );
}


    // <div className="DarkModeToggle">
    //   <h1 className="title">Hello</h1>
    //   <div className="box">
    //     <h2>Random Box</h2>
    //   </div>
    // </div>;