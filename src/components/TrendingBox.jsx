import styles from "./TrendingBox.module.css";

function TrendingBox({ children }) {
  return <section className={styles.trendingBox}>{children}</section>;
}

export default TrendingBox;
