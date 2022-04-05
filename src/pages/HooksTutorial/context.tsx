import { createContext } from 'react';

const theme = {
  light: {
    color: "black",
    background: "white"
  },
  dark: {
    color: "white",
    background: "black"
  }
}

export const ThemeContext = createContext(theme.light)