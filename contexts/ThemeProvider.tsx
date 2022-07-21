import { createContext, useEffect, useState } from "react";

export type ThemeState = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const defaultState: ThemeState = {
  isDarkMode: true,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeState>(defaultState);

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(defaultState.isDarkMode);

  const toggleTheme = () => setDarkMode((_isDarkMode) => !_isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
