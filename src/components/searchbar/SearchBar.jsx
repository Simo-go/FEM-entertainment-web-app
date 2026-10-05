import styles from "./SearchBar.module.css";
import SearchIcon from "../../assets/icon-search.svg?react";

function SearchBar() {
  return (
    <form className={styles.form}>
      <div className={styles.formContainer}>
        <SearchIcon viewBox="0 0 32 32" className={styles.icon} />
        <div className={styles.searchWrapper}>
          <input
            type="search"
            autoComplete="off"
            className={`text-preset-2 ${styles.searchInput}`}
            placeholder="Search for movies or TV series"
          />
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
