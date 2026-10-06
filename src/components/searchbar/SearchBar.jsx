import styles from "./SearchBar.module.css";
import SearchIcon from "../../assets/icon-search.svg?react";
import { useLocation, useNavigate, useParams } from "react-router";

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

function SearchBar({ query, setQuery }) {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (query.length < 2) return;

    const page = path.split("/")[1];
    const scope = page !== "home" ? page : "media";

    let searchPath;
    if (path === "/") searchPath = `home/search?q=${query}&scope=${scope}`;
    else if (path.includes("search")) searchPath = path + `?q=${query}&scope=${scope}`;
    else searchPath = path + `/search?q=${query}&scope=${scope}`;

    navigate(searchPath);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formContainer}>
        <SearchIcon viewBox="0 0 32 32" className={styles.icon} />
        <div className={styles.searchWrapper}>
          <input
            type="search"
            autoComplete="off"
            className={`text-preset-2 ${styles.searchInput}`}
            placeholder={createPlaceholderText(path)}
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
