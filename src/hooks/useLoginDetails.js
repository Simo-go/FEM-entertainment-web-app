import { useCallback, useEffect, useRef, useState } from "react";
import { checkEmailErrors, checkPasswordErrors } from "../utils/formValidation";
import { useLocation, useSearchParams } from "react-router";

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
  const [searchParams] = useSearchParams();
  const paramEmail = searchParams.get("email");

  const handleUpdatePassword = useCallback(
    function handleUpdatePassword(newPassw) {
      setPassword(passw => ({ ...passw, value: newPassw }));
      if (password.error) checkPasswordErrors(passwordRef.current, setPasswordError);
    },
    [password],
  );

  const handleUpdateEmail = useCallback(
    function handleUpdateEmail(newEmail) {
      setEmail(email => ({ ...email, value: newEmail }));
      if (email.error) checkEmailErrors(emailRef.current, setEmailError);
    },
    [email],
  );

  function setEmailError(errorMsg) {
    setEmail(email => ({ ...email, error: errorMsg }));
  }

  function setPasswordError(errorMsg) {
    setPassword(passw => ({ ...passw, error: errorMsg }));
  }

  useEffect(
    function () {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEmail(email => ({ ...email, value: paramEmail || "" }));
    },
    [paramEmail],
  );

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
