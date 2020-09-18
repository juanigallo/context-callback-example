//Componente Hijo
import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

function Child() {
  const themeData = useContext(ThemeContext);
  const { theme, handleTheme } = themeData;

  function handleClick() {
    //ACA QUIERO EJECUTAR MI CALLBACK
    handleTheme();
  }

  return (
    <>
      <p>El valor del theme en el child es: {theme}</p>
      <button onClick={handleClick}>Activar callback con API Context</button>
    </>
  );
}

export default Child;
