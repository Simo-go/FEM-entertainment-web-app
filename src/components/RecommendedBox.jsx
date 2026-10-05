import styles from "./RecommendedBox.module.css";

function RecommendedBox({ children }) {
  return <section className={styles.recommendedBox}>{children}</section>;
}

export default RecommendedBox;
