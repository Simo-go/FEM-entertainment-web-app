import { useAuth } from "../../contexts/AuthContext";
import Button from "../button/Button";
import LoginLoader from "../loginform/LoginLoader";
import styles from "./FormButton.module.css";

function FormButton({ children }) {
  const { isLoadingLogin } = useAuth();

  return (
    <div>
      <Button className={styles.btnForm}>{isLoadingLogin ? <LoginLoader className={styles.loader} /> : children}</Button>
    </div>
  );
}

export default FormButton;
