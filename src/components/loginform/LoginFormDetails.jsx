import { Link } from "react-router";
import Button from "../button/Button";
import styles from "./LoginFormDetails.module.css";
import InputError from "./InputError";

function LoginFormDetails({ email, onUpdateEmail, password, onUpdatePassword, emailRef, passwordRef }) {
  return (
    <div className={styles.formDetails}>
      <div>
        <label htmlFor="email" className={`${styles.inputContainer} ${email.error ? styles.hasError : ""}`}>
          <input
            id="email"
            type="email"
            placeholder="Email address"
            value={email.value}
            ref={emailRef}
            onChange={e => onUpdateEmail(e.target.value)}
            required
          />
          {email.error && <InputError msg={email.error} />}
        </label>
      </div>
      <div>
        <label htmlFor="password" className={`${styles.inputContainer} ${password.error ? styles.hasError : ""}`}>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password.value}
            onChange={e => onUpdatePassword(e.target.value)}
            ref={passwordRef}
            required
            minLength={6}
          />
          {password.error && <InputError msg={password.error} />}
        </label>
      </div>
      <div>
        <Button className={styles.btnForm}>Login to your account</Button>
      </div>
      <p className={styles.msgNoAccount}>
        <span>Don't have an account?</span> <Link>Sign Up</Link>
      </p>
    </div>
  );
}

export default LoginFormDetails;
