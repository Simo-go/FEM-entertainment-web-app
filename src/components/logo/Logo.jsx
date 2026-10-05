import styles from "./Logo.module.css";
import LogoIcon from "../../assets/logo.svg?react";
import { Link } from "react-router";

function Logo() {
  return (
    <Link to="/">
      <LogoIcon className={styles.logo} width={25} height={20} viewBox="0 0 33 27" />
    </Link>
  );
}

export default Logo;
