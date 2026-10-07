import clsx from "clsx";
import styles from "./form.module.css";

function Form({ children, className, ...props }) {
  return (
    <form className={clsx(styles.form, className)} {...props}>
      {children}
    </form>
  );
}

export default Form;
