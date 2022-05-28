import styles from "../../styles/filter.module.scss";

interface Props {
  value: string;
  children: React.ReactNode;
  onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
}

const Filter = ({ value, children, onChange }: Props) => {
  return (
    <div className={styles.dropdown}>
      <select
        name="dropdown"
        className={styles.dropdown}
        onChange={onChange}
        value={value}
      >
        {children}
      </select>
    </div>
  );
};

export default Filter;
