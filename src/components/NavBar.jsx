import Logo from "./Logo";
import Menu from "./Menu";
import ProfileButton from "./ProfileButton";

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
