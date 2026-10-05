import styles from "./SearchBar.module.css";
import SearchIcon from "../../assets/icon-search.svg?react";
import { useLocation, useParams } from "react-router";

function createPlaceholderText(path) {
  let placeholderText;

  switch (path) {
    case "/":
      placeholderText = "Search for movies or TV series";
      break;
    case "/movies":
      placeholderText = "Search for movies";
      break;
    case "/series":
      placeholderText = "Search for TV series";
      break;
    case "/bookmarks":
      placeholderText = "Search for bookmarked shows";
      break;
    default:
      placeholderText = "Search for movies or TV series";
  }

  return placeholderText;
}

function SearchBar() {
  const { pathname: path } = useLocation();

  return (
    <form className={styles.form}>
      <div className={styles.formContainer}>
        <SearchIcon viewBox="0 0 32 32" className={styles.icon} />
        <div className={styles.searchWrapper}>
          <input
            type="search"
            autoComplete="off"
            className={`text-preset-2 ${styles.searchInput}`}
            placeholder={createPlaceholderText(path)}
          />
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
