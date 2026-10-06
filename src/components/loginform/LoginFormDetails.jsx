import { Link } from "react-router";
import Button from "../button/Button";
import styles from "./LoginFormDetails.module.css";

function LoginFormDetails() {
  return (
    <div className={styles.formDetails}>
      <div>
        <label htmlFor="email">
          <input id="email" type="email" placeholder="Email address" />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <input id="password" type="password" placeholder="Password" />
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
