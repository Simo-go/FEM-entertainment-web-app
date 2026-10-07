import styles from "./InputError.module.css";

function InputError({ className, children }) {
  return <span className={`${styles.inputError} ${className}`}>{children}</span>;
}

export default InputError;
