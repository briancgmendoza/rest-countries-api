import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

const ThemeContext = React.createContext({
  darkTheme: true,
  toggle: () => {},
});

export const ThemeContextProvider = ({ children }: Props) => {
  const [darkTheme, setDarkTheme] = React.useState(true);

  const toggleHandler = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggle: toggleHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
