import styles from "./InputError.module.css";

function InputError({ className, msg }) {
  return <span className={`${styles.inputError} ${className}`}>{msg}</span>;
}

export default InputError;
