import { useRef, useState } from "react";
import { useRegisterDetails } from "../../hooks/useRegisterDetails";

import Form from "../form/form";
import FormButton from "../form/FormButton";
import FormDetails from "../form/FormDetails";
import FormHeader from "../form/FormHeader";
import FormInput from "../form/FormInput";
import styles from "./RegistrationForm.module.css";
import { Link, useNavigate } from "react-router";
import { checkConfirmPasswordError, checkEmailErrors, checkPasswordErrors } from "../../utils/formValidation";
import { useAuth } from "../../contexts/AuthContext";
import InputError from "../loginform/InputError";

function RegistrationForm() {
  const { createUser, formError, isLoadingForm } = useAuth();
  const {
    email,
    password,
    confirmPassword,
    emailRef,
    passwordRef,
    confirmPasswordRef,
    handleUpdateEmail,
    handleUpdatePassword,
    handleUpdateConfirmPassword,
    setEmailError,
    setPasswordError,
    setConfirmPasswordError,
  } = useRegisterDetails();
  const navigate = useNavigate();

  const formRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    if (isLoadingForm) return;

    checkEmailErrors(emailRef.current, setEmailError);
    checkPasswordErrors(passwordRef.current, setPasswordError);
    checkConfirmPasswordError(confirmPasswordRef.current, setConfirmPasswordError, !passwordRef.current.checkValidity());

    if (!formRef.current.checkValidity()) {
      return;
    }

    const success = await createUser(email.value, password.value);
    if (success) navigate("/login");
  }

  return (
    <Form onSubmit={handleSubmit} ref={formRef} noValidate>
      <FormHeader>Sign Up</FormHeader>
      {formError && <InputError className={styles.formError}>{formError}</InputError>}
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
          ref={passwordRef}
          onChange={e => handleUpdatePassword(e.target.value)}
          minLength={6}
          required
        />
        <FormInput
          error={confirmPassword.error}
          id="password-confirm"
          type="password"
          placeholder="Repeat Password"
          value={confirmPassword.value}
          ref={confirmPasswordRef}
          onChange={e => handleUpdateConfirmPassword(e.target.value)}
          required
          pattern={password.value}
        />
        <FormButton>Create an account</FormButton>
        <p className={styles.haveAccMsg}>
          <span>Already have an account?</span> <Link to="/login">Login</Link>
        </p>
      </FormDetails>
    </Form>
  );
}

export default RegistrationForm;
