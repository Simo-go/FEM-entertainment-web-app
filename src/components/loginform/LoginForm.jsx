import styles from "./LoginForm.module.css";
import LoginFormHeader from "./LoginFormHeader";
import LoginFormDetails from "./LoginFormDetails";
import { useLoginDetails } from "../../hooks/useLoginDetails";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";
import { useRef } from "react";
import InputError from "./InputError";
import Form from "../form/form";
import FormHeader from "../form/FormHeader";

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

    console.log(formRef);

    if (!formRef.current.checkValidity()) return;

    const isVerified = await verifyUser(email.value, password.value);
    console.log(isVerified);

    if (isVerified) navigate("/", { replace: true });
  }

  return (
    <Form onSubmit={handleSubmit} noValidate={true} ref={formRef}>
      <FormHeader>Login</FormHeader>
      {loginError && <InputError className={styles.loginError}>{loginError}</InputError>}
      <LoginFormDetails
        email={email}
        onUpdateEmail={handleUpdateEmail}
        password={password}
        onUpdatePassword={handleUpdatePassword}
        emailRef={emailRef}
        passwordRef={passwordRef}
      />
    </Form>
  );
}

export default LoginForm;
