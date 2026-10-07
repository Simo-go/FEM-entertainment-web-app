import styles from "./LoginForm.module.css";
import { useLoginDetails } from "../../hooks/useLoginDetails";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router";
import { useCallback, useRef } from "react";
import InputError from "./InputError";
import Form from "../form/form";
import FormHeader from "../form/FormHeader";
import FormDetails from "../form/FormDetails";
import FormInput from "../form/FormInput";
import FormButton from "../form/FormButton";
import { checkEmailErrors, checkPasswordErrors } from "../../utils/formValidation";

function LoginForm() {
  const { email, handleUpdateEmail, emailRef, password, handleUpdatePassword, passwordRef, setEmailError, setPasswordError } =
    useLoginDetails();
  const { verifyUser, formError, isLoadingForm } = useAuth();
  const navigate = useNavigate();
  const formRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    if (isLoadingForm) return;

    checkEmailErrors(emailRef.current, setEmailError);
    checkPasswordErrors(passwordRef.current, setPasswordError);

    if (!formRef.current.checkValidity()) return;

    const isVerified = await verifyUser(email.value, password.value);

    if (isVerified) navigate("/app", { replace: true });
  }

  return (
    <Form onSubmit={handleSubmit} noValidate={true} ref={formRef}>
      <FormHeader>Login</FormHeader>
      {formError && <InputError className={styles.loginError}>{formError}</InputError>}
      <FormDetails>
        <FormInput
          error={email.error}
          id="email"
          type="email"
          placeholder="Email address"
          value={email.value}
          ref={emailRef}
          onChange={useCallback(e => handleUpdateEmail(e.target.value), [handleUpdateEmail])}
          required
        />
        <FormInput
          error={password.error}
          id="password"
          type="password"
          placeholder="Password"
          value={password.value}
          onChange={useCallback(e => handleUpdatePassword(e.target.value), [handleUpdatePassword])}
          ref={passwordRef}
          required
          minLength={6}
        />
        <FormButton>Login to your account</FormButton>
        <p className={styles.msgNoAccount}>
          <span>Don't have an account?</span> <Link to="/register">Sign Up</Link>
        </p>
      </FormDetails>
    </Form>
  );
}

export default LoginForm;
