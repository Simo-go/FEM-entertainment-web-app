import styles from "./FormDetails.module.css";

function FormDetails({ children }) {
  return <div className={styles.formDetails}>{children}</div>;
}

export default FormDetails;
