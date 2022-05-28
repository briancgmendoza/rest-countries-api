import classNames from "classnames";
import * as React from "react";

import ThemeContext from "../../store/theme-context";
import Toggle from "../UI/Button/toggle";

import styles from "../../styles/header.module.scss";

const Header = () => {
  const ctx = React.useContext(ThemeContext);
  return (
    <header
      className={classNames({
        [styles["header-wrapper"]]: true,
        [styles["header-wrapper"] && styles["dark-mode"]]: ctx.darkTheme,
      })}
    >
      <h1 className={styles.title}>Where in the world?</h1>
      <span className={styles["span-toggle"]}>
        {!ctx.darkTheme ? "Light-mode:" : "Dark-mode:"} <Toggle />
      </span>
    </header>
  );
};

export default Header;
