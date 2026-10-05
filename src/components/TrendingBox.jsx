import styles from "./TrendingBox.module.css";

function TrendingBox({ children }) {
  return <section className={styles.TrendingBox}>{children}</section>;
}

export default TrendingBox;
