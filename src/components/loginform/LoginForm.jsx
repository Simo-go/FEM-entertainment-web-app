import styles from "./LoginForm.module.css";
import { useLoginDetails } from "../../hooks/useLoginDetails";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router";
import { useRef } from "react";
import InputError from "./InputError";
import Form from "../form/form";
import FormHeader from "../form/FormHeader";
import FormDetails from "../form/FormDetails";
import FormInput from "../form/FormInput";
import FormButton from "../form/FormButton";

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
      <FormDetails>
        <FormInput
          error={email.error}
          id="email"
          type="email"
          placeholder="Email address"
          value={email.value}
          ref={emailRef}
          onChange={e => handleUpdateEmail(e.target.value)}
          required
        />
        <FormInput
          error={password.error}
          id="password"
          type="password"
          placeholder="Password"
          value={password.value}
          onChange={e => handleUpdatePassword(e.target.value)}
          ref={passwordRef}
          required
          minLength={6}
        />
        <FormButton>Login to your account</FormButton>
        <p className={styles.msgNoAccount}>
          <span>Don't have an account?</span> <Link>Sign Up</Link>
        </p>
      </FormDetails>
    </Form>
  );
}

export default LoginForm;
