import classNames from "classnames";
import * as React from "react";

import ThemeContext from "../../store/theme-context";
import styles from "../../styles/searchbar.module.scss";

interface Props {
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ value, onChange }: Props) => {
  const ctx = React.useContext(ThemeContext);
  return (
    <div
      className={classNames({
        [styles["search-bar"]]: true,
        [styles["search-bar"] && styles["dark-mode"]]: ctx.darkTheme,
      })}
    >
      <input
        type="text"
        placeholder="Search for a country"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
