import BookmarkedBox from "./BookmarkedBox";
import styles from "./Bookmarks.module.css";
import MovieList from "./MoviesList";

function Bookmarks() {
  return (
    <>
      <BookmarkedBox className={styles.bookmarkedMoviesBox}>
        <h2 className="title text-preset-1">Bookmarked Movies</h2>
        <MovieList />
      </BookmarkedBox>
      <BookmarkedBox>
        <h2 className="title text-preset-1">Bookmarked TV Series</h2>
        <MovieList />
      </BookmarkedBox>
    </>
  );
}

export default Bookmarks;
