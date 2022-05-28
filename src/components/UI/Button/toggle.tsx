import * as React from "react";
import classNames from "classnames";
import ThemeContext from "../../../store/theme-context";

import styles from "../../../styles/toggle.module.scss";

const Toggle = () => {
  const ctx = React.useContext(ThemeContext);
  return (
    <div
      onClick={ctx.toggle}
      className={classNames({
        [styles.toggle]: true,
        [styles.toggle && styles["dark-mode"]]: ctx.darkTheme,
      })}
    >
      <div className={styles.notch}>
        <div className={styles.crater} />
        <div className={styles.crater} />
      </div>
      <div>
        <div
          className={classNames({
            [styles.shape]: true,
            [styles.sm]: true,
          })}
        />
        <div
          className={classNames({
            [styles.shape]: true,
            [styles.sm]: true,
          })}
        />
        <div
          className={classNames({
            [styles.shape]: true,
            [styles.md]: true,
          })}
        />
        <div
          className={classNames({
            [styles.shape]: true,
            [styles.lg]: true,
          })}
        />
      </div>
    </div>
  );
};

export default Toggle;
