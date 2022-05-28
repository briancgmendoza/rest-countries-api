import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import classNames from "classnames";

import ThemeContext from "./store/theme-context";
import styles from "./styles/app.module.scss";
import Header from "./components/Header";
import Homepage from "./routes/Homepage";

const App = () => {
  const ctx = React.useContext(ThemeContext);
  return (
    <div
      className={classNames({
        [styles.container]: true,
        [styles.container && styles["dark-mode"]]: ctx.darkTheme,
      })}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
