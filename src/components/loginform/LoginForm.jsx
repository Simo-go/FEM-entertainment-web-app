import styles from "./LoginForm.module.css";
import LoginFormHeader from "./LoginFormHeader";
import LoginFormDetails from "./LoginFormDetails";

function LoginForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <LoginFormHeader />
      <LoginFormDetails />
    </form>
  );
}

export default LoginForm;
