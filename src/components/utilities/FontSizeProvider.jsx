import React, { createContext, useState, useEffect } from "react";

// Create a new context
export const FontSizeContext = createContext();

// Create a provider component
export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    console.log("FontSizeProvider render:", { fontSize });
  }, [fontSize]);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};
