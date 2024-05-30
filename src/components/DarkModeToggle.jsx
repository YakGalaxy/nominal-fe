import  { useState } from "react";
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  return (
    <div className="DarkModeToggle">
      <h1 className='title'>Hello</h1>
      <div className='box'>
        <h2>Random Box</h2>
      </div>
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default DarkModeToggle;
