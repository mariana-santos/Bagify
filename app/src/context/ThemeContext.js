import React, { createContext, useState } from 'react';

import { THEME } from '../utils/constants';
import { COLORS_SCHEME } from '../theme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeCode, setThemeCode] = useState(THEME.DARK);

  const toggleTheme = (themeCode) => {
    setThemeCode(themeCode);
  };

  const theme = COLORS_SCHEME[themeCode];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
