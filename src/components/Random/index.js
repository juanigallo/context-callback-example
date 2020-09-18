import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

function Random() {
  const themeData = useContext(ThemeContext);

  return (
    <p>
      Hola, yo soy un componente random, que tambien puede leer el{" "}
      {themeData.theme} entre otras cosas
    </p>
  );
}

export default Random;
