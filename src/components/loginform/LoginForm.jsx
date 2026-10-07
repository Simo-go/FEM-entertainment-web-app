import styles from "./LoginForm.module.css";
import LoginFormHeader from "./LoginFormHeader";
import LoginFormDetails from "./LoginFormDetails";
import { useRef, useState } from "react";

function LoginForm() {
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
  const formRef = useRef();

  function hanldeUpdatePassword(newPassw) {
    setPassword(passw => ({ ...passw, value: newPassw }));
    if (password.error) checkPasswordErrors(passwordRef.current);
  }

  function handleUpdateEmail(newEmail) {
    setEmail(email => ({ ...email, value: newEmail }));
    if (email.error) checkEmailErrors(emailRef.current);
  }

  function setEmailError(errorMsg) {
    setEmail(email => ({ ...email, error: errorMsg }));
  }

  function setPasswordError(errorMsg) {
    setPassword(passw => ({ ...passw, error: errorMsg }));
  }

  function checkEmailErrors(emailInput) {
    console.log(emailInput.validity.typeMismatch && !/\.[a-zA-Z]+$/.test(emailInput.value));

    if (emailInput.validity.valueMissing) return setEmailError("Can't be empty");
    if (emailInput.validity.typeMismatch || !/\.[a-zA-Z]+$/.test(emailInput.value)) return setEmailError("Incorrect format");
    setEmailError("");
  }

  function checkPasswordErrors(passwordInput) {
    if (passwordInput.validity.valueMissing) return setPasswordError("Can't be empty");
    if (passwordInput.validity.tooShort) return setPasswordError("Too short");
    if (password.value.length > 24) {
      passwordInput.setCustomValidity("Too long");
      return setPasswordError("Too long");
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).+$/.test(password.value)) {
      passwordInput.setCustomValidity("Incorrect format");
      return setPasswordError("Incorrect format");
    }
    setPasswordError("");
    passwordInput.setCustomValidity("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(passwordRef.current.validity);

    checkEmailErrors(emailRef.current);
    checkPasswordErrors(passwordRef.current);
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit} noValidate ref={formRef}>
      <LoginFormHeader />
      <LoginFormDetails
        email={email}
        onUpdateEmail={handleUpdateEmail}
        password={password}
        onUpdatePassword={hanldeUpdatePassword}
        emailRef={emailRef}
        passwordRef={passwordRef}
      />
    </form>
  );
}

export default LoginForm;
