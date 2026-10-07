import styles from "./LoginForm.module.css";
import LoginFormHeader from "./LoginFormHeader";
import LoginFormDetails from "./LoginFormDetails";
import { useLoginDetails } from "../../hooks/useLoginDetails";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";
import { useRef } from "react";
import InputError from "./InputError";

function LoginForm() {
  const { email, handleUpdateEmail, emailRef, checkEmailErrors, password, handleUpdatePassword, checkPasswordErrors, passwordRef } =
    useLoginDetails();
  const { verifyUser, loginError, isLoadingLogin } = useAuth();
  const navigate = useNavigate();
  const formRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    if (isLoadingLogin) return;

    checkEmailErrors(emailRef.current);
    checkPasswordErrors(passwordRef.current);

    if (!formRef.current.checkValidity()) return;

    const isVerified = await verifyUser(email.value, password.value);
    console.log(isVerified);

    if (isVerified) navigate("/", { replace: true });
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit} noValidate ref={formRef}>
      <LoginFormHeader />
      {loginError && <InputError className={styles.loginError}>{loginError}</InputError>}
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
