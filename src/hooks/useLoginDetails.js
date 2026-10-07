import { useRef, useState } from "react";
import { checkEmailErrors, checkPasswordErrors } from "../utils/formValidation";

export function useLoginDetails() {
  const [email, setEmail] = useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: "",
  });
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleUpdatePassword(newPassw) {
    setPassword(passw => ({ ...passw, value: newPassw }));
    if (password.error) checkPasswordErrors(passwordRef.current, setPasswordError);
  }

  function handleUpdateEmail(newEmail) {
    setEmail(email => ({ ...email, value: newEmail }));
    if (email.error) checkEmailErrors(emailRef.current, setEmailError);
  }

  function setEmailError(errorMsg) {
    setEmail(email => ({ ...email, error: errorMsg }));
  }

  function setPasswordError(errorMsg) {
    setPassword(passw => ({ ...passw, error: errorMsg }));
  }

  return {
    email,
    password,
    emailRef,
    passwordRef,
    handleUpdatePassword,
    handleUpdateEmail,
    setEmailError,
    setPasswordError,
  };
}
