import { useState } from "react";

export const TextResizeToggle = () => {
    const [fontSize, setFontSize] = useState(16);

    const increaseFontSize = () => {
        const newSize = Math.min(fontSize + 2, 36);
       
        setFontSize(newSize);
      };
    
      const decreaseFontSize = () => {
        const newSize = Math.max(fontSize - 2, 8);
        
        setFontSize(newSize);
      };
  
    return (
      <div className="ToggleFont">
        <input 
          type="text" 
          style={{ fontSize: `${fontSize}px` }} 
          placeholder="Text" 
        />
        <div className="buttons">
          <button onClick={increaseFontSize}>Increase</button>
          <button onClick={decreaseFontSize}>Decrease</button>
        </div>
      </div>
    );
  }



