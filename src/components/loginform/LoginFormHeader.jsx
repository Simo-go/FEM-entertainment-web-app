import styles from "./LoginFormHeader.module.css";

function LoginFormHeader() {
  return (
    <header className={styles.header}>
      <h1 className={`${styles.title}`}>Login</h1>
    </header>
  );
}

export default LoginFormHeader;
