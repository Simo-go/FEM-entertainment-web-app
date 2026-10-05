import styles from "./Main.module.css";

function Main({ children }) {
  return <main className={styles.mainContainer}>{children}</main>;
}

export default Main;
