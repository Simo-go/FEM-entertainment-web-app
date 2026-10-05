import styles from "./MenuItem.module.css";

function MenuItem({ Icon }) {
  return (
    <li className={styles.item}>
      <button className="btn">
        <Icon className={styles.icon} viewBox="0 0 20 20"></Icon>
      </button>
    </li>
  );
}

export default MenuItem;
