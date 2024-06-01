

export const TextResizeToggle = ({ fontSize, setFontSize }) => {

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
              <div className="buttons">
                <button onClick={increaseFontSize}>Increase Font Size</button>
                <button onClick={decreaseFontSize}>Decrease Font Size</button>
              </div>
            </div>
          );
        };
    
  



