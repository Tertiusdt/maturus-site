import React, { createContext, useState, useEffect } from 'react';

export const WindowSizeContext = createContext();

export const WindowSizeProvider = ({ children }) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth)
    };
    
    // Set initial height
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight);

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <WindowSizeContext.Provider value={{windowHeight, windowWidth}}>
      {children}
    </WindowSizeContext.Provider>
  );
};