import { memo } from "react";
import styles from "./FormHeader.module.css";

function FormHeader({ children }) {
  return (
    <header className={styles.header}>
      <h1 className={`${styles.title}`}>{children}</h1>
    </header>
  );
}

export default memo(FormHeader);
