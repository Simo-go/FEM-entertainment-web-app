import styles from "./MenuItem.module.css";

function MenuItem({ El }) {
  return (
    <li className={styles.item}>
      <El className={styles.icon} viewBox="0 0 20 20"></El>
    </li>
  );
}

export default MenuItem;
