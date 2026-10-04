import Logo from "./Logo";
import Menu from "./Menu";
import ProfileButton from "./ProfileButton";

import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <Menu />
      <ProfileButton />
    </nav>
  );
}

export default NavBar;
