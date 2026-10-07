import { useRef, useState } from "react";
import { checkConfirmPasswordError, checkEmailErrors, checkPasswordErrors } from "../utils/formValidation";

export function useRegisterDetails() {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "" });
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  function handleUpdateEmail(newValue) {
    setEmail(email => ({ ...email, value: newValue }));
    if (email.error) checkEmailErrors(emailRef.current, setEmailError);
  }

  function handleUpdatePassword(newValue) {
    setPassword(password => ({ ...password, value: newValue }));
    if (password.error) checkPasswordErrors(passwordRef.current, setPasswordError);
  }

  function handleUpdateConfirmPassword(newValue) {
    setConfirmPassword(password => ({ ...password, value: newValue }));
    if (confirmPassword.error) checkConfirmPasswordError(confirmPassword.current, setConfirmPassword);
  }

  function setEmailError(msg) {
    setEmail(email => ({ ...email, error: msg }));
  }

  function setPasswordError(msg) {
    setPassword(password => ({ ...password, error: msg }));
  }

  function setConfirmPasswordError(msg) {
    setConfirmPassword(password => ({ ...password, error: msg }));
  }

  return {
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
  };
}
