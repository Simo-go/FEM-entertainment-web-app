import { useAuth } from "../../contexts/AuthContext";
import Button from "../button/Button";
import ButtonLoader from "./ButtonLoader";
import styles from "./FormButton.module.css";

function FormButton({ children }) {
  const { isLoadingForm } = useAuth();

  return (
    <div>
      <Button className={styles.btnForm}>{isLoadingForm ? <ButtonLoader className={styles.loader} /> : children}</Button>
    </div>
  );
}

export default FormButton;
