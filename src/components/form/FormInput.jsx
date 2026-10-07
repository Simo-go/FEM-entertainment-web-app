import clsx from "clsx";
import styles from "./FormInput.module.css";
import InputError from "../loginform/InputError";
import { memo } from "react";

function FormInput({ error, ...props }) {
  return (
    <div>
      <label htmlFor={props.id} className={clsx(styles.inputContainer, { [styles.hasError]: error })}>
        <input {...props} />
        {error && <InputError>{error}</InputError>}
      </label>
    </div>
  );
}

export default memo(FormInput);
