import React from 'react';
import { useState } from 'react';
import Counter from './components/Counter'
import Profile from './components/Profie'
import { ThemeContext } from './context'

const HooksTutorial: React.FC = () => {
  const [theme, setTheme] = useState({color: "#333", background: "#ddd"})
  const [toggleMode, setMode] = useState(1)
  const handleClickLight = () => {
    setMode(1);
    setTheme({color: "#333", background: "#ddd"})
  }
  const handleClickDark = () => {
    setMode(2);
    setTheme({color: "#ddd", background: "#333"})
  }

  return (
    <ThemeContext.Provider value={{
      color: theme.color,
      background: theme.background
    }}>
      <h1>Hooks</h1>
      <button style={ toggleMode === 1 ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white", color: "black"}} onClick={handleClickLight}>Light</button>
      <button style={ toggleMode === 2 ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white", color: "black"}} onClick={handleClickDark}>Dark</button>
      <Counter />
      <Profile />
    </ThemeContext.Provider>
  );
};

export default HooksTutorial