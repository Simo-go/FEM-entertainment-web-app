import MenuItem from "./MenuItem";
import HomeIcon from "../assets/icon-nav-home.svg?react";
import MoviesIcon from "../assets/icon-nav-movies.svg?react";
import BookmarkIcon from "../assets/icon-nav-bookmark.svg?react";
import SeriesIcon from "../assets/icon-nav-tv-series.svg?react";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <ul className={styles.list}>
      <MenuItem El={HomeIcon} />
      <MenuItem El={MoviesIcon} />
      <MenuItem El={SeriesIcon} />
      <MenuItem El={BookmarkIcon} />
    </ul>
  );
}

export default Menu;
