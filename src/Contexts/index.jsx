/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// questo context va comunque esportato: mi servirà quando vorrò uarlo
export const Context = createContext();

// creare ed esportare il "fornitore" del contesto: mi servirà per dire a chi sarà accessibile questo context (l'area dove vorrò usarlo)
export function ContextProvider(props) {
  const styles = {
    dark: {
      color: "white",
      background: "black",
    },
    light: {
      color: "black",
      background: "white",
    },
  };

  const [theme, setTheme] = useState(styles.dark);

  const handleTheme = () => {
    if (theme.color === "white") {
      setTheme(() => styles.light);
    } else {
      setTheme(() => styles.dark);
    }
  };

  return (
    <Context.Provider value={{ theme, handleTheme }}>
      {props.children}
    </Context.Provider>
  );
}
