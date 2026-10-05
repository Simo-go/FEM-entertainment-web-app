import MenuItem from "./MenuItem";
import HomeIcon from "../assets/icon-nav-home.svg?react";
import MoviesIcon from "../assets/icon-nav-movies.svg?react";
import BookmarkIcon from "../assets/icon-nav-bookmark.svg?react";
import SeriesIcon from "../assets/icon-nav-tv-series.svg?react";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <nav>
      <ul className={styles.list}>
        <MenuItem Icon={HomeIcon} />
        <MenuItem Icon={MoviesIcon} />
        <MenuItem Icon={SeriesIcon} />
        <MenuItem Icon={BookmarkIcon} />
      </ul>
    </nav>
  );
}

export default Menu;
