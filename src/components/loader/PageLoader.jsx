import { Oval } from "react-loader-spinner";
import styles from "./PageLoader.module.css";

function PageLoader() {
  return <Oval visible={true} height="60" width="60" color="#fff" ariaLabel="oval-loading" wrapperClass={styles.pageLoader} />;
}

export default PageLoader;
