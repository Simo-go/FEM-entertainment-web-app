import styles from "./LoginForm.module.css";
import LoginFormHeader from "./LoginFormHeader";
import LoginFormDetails from "./LoginFormDetails";
import { useLoginDetails } from "../../hooks/useLoginDetails";

function LoginForm() {
  const { email, handleUpdateEmail, emailRef, checkEmailErrors, password, handleUpdatePassword, checkPasswordErrors, passwordRef } =
    useLoginDetails();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(emailRef.current);

    checkEmailErrors(emailRef.current);
    checkPasswordErrors(passwordRef.current);
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit} noValidate>
      <LoginFormHeader />
      <LoginFormDetails
        email={email}
        onUpdateEmail={handleUpdateEmail}
        password={password}
        onUpdatePassword={handleUpdatePassword}
        emailRef={emailRef}
        passwordRef={passwordRef}
      />
    </form>
  );
}

export default LoginForm;
