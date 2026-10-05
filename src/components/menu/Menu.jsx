import MenuItem from "../menuitem/MenuItem";
import HomeIcon from "../../assets/icon-nav-home.svg?react";
import MoviesIcon from "../../assets/icon-nav-movies.svg?react";
import BookmarkIcon from "../../assets/icon-nav-bookmark.svg?react";
import SeriesIcon from "../../assets/icon-nav-tv-series.svg?react";
import styles from "./Menu.module.css";
import { NavLink } from "react-router";

function Menu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <NavLink to="/">
          <MenuItem Icon={HomeIcon} />
        </NavLink>
        <NavLink to="/movies">
          <MenuItem Icon={MoviesIcon} />
        </NavLink>
        <NavLink to="/series">
          <MenuItem Icon={SeriesIcon} />
        </NavLink>
        <NavLink to="/bookmarks">
          <MenuItem Icon={BookmarkIcon} />
        </NavLink>
      </ul>
    </nav>
  );
}

export default Menu;
