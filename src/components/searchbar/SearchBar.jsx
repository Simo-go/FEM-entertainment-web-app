import styles from "./SearchBar.module.css";
import SearchIcon from "../../assets/icon-search.svg?react";
import { useLocation, useNavigate, useParams } from "react-router";

function createPlaceholderText(path) {
  let placeholderText;
  path = path.split("/")[2] || path.split("/")[1];

  switch (path) {
    case "movies":
      placeholderText = "Search for movies";
      break;
    case "series":
      placeholderText = "Search for TV series";
      break;
    case "bookmarks":
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
    console.log(page);

    const scope = page === "app" || page === "search" || page === "bookmarks" ? "media" : page;

    let searchPath;
    if (path.includes("search")) searchPath = path + `?q=${query}&scope=${scope}`;
    else searchPath = path + `/search?q=${query}&scope=${scope}`;

    navigate(searchPath);
    setQuery("");
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
