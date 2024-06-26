import React, { createContext, useContext, useState } from 'react';
import { DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme } from 'react-native-paper';

// Your existing useTheme hook
const lightTheme = {
  colors: {
    background: '#FFFFFF',
    text: '#000000',
    textSecondary: '#555555',
  },
};

const darkTheme = {
  colors: {
    background: '#1E1E1E', // Lighter shade of black
    text: '#FFFFFF',
    textSecondary: '#AAAAAA',
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Determine which theme to use based on isDarkTheme state
  const theme = isDarkTheme ? NavigationDarkTheme : NavigationDefaultTheme;
  const paperTheme = isDarkTheme ? PaperDarkTheme : PaperDefaultTheme;

  // useTheme hook integrated into the context
  const useTheme = () => {
    const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
    return { theme, paperTheme, toggleTheme, isDarkTheme };
  };

  return (
    <ThemeContext.Provider value={{ useTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context.useTheme();
};
