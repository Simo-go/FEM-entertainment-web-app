import Logo from "../components/logo/Logo";
import LoginForm from "../components/loginform/LoginForm";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <Logo className={styles.logoLogin} />
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
