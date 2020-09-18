// Componente Padre

import React, { useState } from "react";
import "./App.css";
import A from "./components/a";
import Random from "./components/Random";

import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  function handleTheme() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const themeContextData = {
    theme,
    handleTheme
  };

  return (
    <>
      <ThemeProvider value={themeContextData}>
        <p>Theme actual: {theme}</p>
        <A />
        <Random />
      </ThemeProvider>
    </>
  );
}

export default App;
