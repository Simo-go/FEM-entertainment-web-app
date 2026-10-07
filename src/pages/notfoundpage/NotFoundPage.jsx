import clsx from "clsx";
import styles from "./NotFoundPage.module.css";
import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <div>
        <p className={clsx("text-preset-5", styles.desc)}>Page not found</p>
        <Link className={styles.link} to="/" replace>
          Go back
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
