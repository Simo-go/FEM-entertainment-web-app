import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import ProfileButton from "../profilebutton/ProfileButton";

import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
      <ProfileButton />
    </header>
  );
}

export default NavBar;
