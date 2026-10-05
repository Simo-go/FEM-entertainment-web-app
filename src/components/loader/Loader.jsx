import { ThreeDots } from "react-loader-spinner";
import styles from "./loader.module.css";

function Loader() {
  return (
    <div>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        radius="6"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass={styles.loader}
      />
    </div>
  );
}

export default Loader;
