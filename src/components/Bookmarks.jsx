import MediaBox from "./MediaBox";
import styles from "./Bookmarks.module.css";
import MovieList from "./MoviesList";

function Bookmarks() {
  return (
    <>
      <MediaBox className={styles.bookmarkedMoviesBox}>
        <h2 className="title text-preset-1">Bookmarked Movies</h2>
        <MovieList />
      </MediaBox>
      <MediaBox>
        <h2 className="title text-preset-1">Bookmarked TV Series</h2>
        <MovieList />
      </MediaBox>
    </>
  );
}

export default Bookmarks;
