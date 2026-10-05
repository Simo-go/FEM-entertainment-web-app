import styles from "./Movie.module.css";
import MoviePoster from "./MoviePoster";
import MovieDetails from "./MovieDetails";
import BookmarkButton from "./BookmarkButton";

function Movie({ type = "regular" }) {
  return (
    <li className={`${styles.movie} ${type === "compact" ? styles["movie--compact"] : ""}`}>
      <article>
        <MoviePoster type={type} />
        <MovieDetails type={type} />
      </article>
      <BookmarkButton />
    </li>
  );
}

export default Movie;
