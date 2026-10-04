import styles from "./Logo.module.css";
import LogoIcon from "../assets/logo.svg?react";

function Logo() {
  return <LogoIcon className={styles.logo} width={25} height={20} viewBox="0 0 33 27" />;
}

export default Logo;
