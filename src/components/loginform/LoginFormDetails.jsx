import { Link } from "react-router";
import Button from "../button/Button";
import styles from "./LoginFormDetails.module.css";
import InputError from "./InputError";
import { useAuth } from "../../contexts/AuthContext";
import LoginLoader from "./LoginLoader";
import FormInput from "../form/FormInput";
import clsx from "clsx";

function LoginFormDetails({ email, onUpdateEmail, password, onUpdatePassword, emailRef, passwordRef }) {
  const { isLoadingLogin } = useAuth();

  return (
    <div className={styles.formDetails}>
      <FormInput
        error={email.error}
        id="email"
        type="email"
        placeholder="Email address"
        value={email.value}
        ref={emailRef}
        onChange={e => onUpdateEmail(e.target.value)}
        required
      />
      <FormInput
        error={password.error}
        id="password"
        type="password"
        placeholder="Password"
        value={password.value}
        onChange={e => onUpdatePassword(e.target.value)}
        ref={passwordRef}
        required
        minLength={6}
      />
      <div>
        <Button className={styles.btnForm}>{isLoadingLogin ? <LoginLoader className={styles.loader} /> : "Login to your account"}</Button>
      </div>
      <p className={styles.msgNoAccount}>
        <span>Don't have an account?</span> <Link>Sign Up</Link>
      </p>
    </div>
  );
}

export default LoginFormDetails;
