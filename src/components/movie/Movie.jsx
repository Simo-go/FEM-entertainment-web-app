import styles from "./Movie.module.css";
import MoviePoster from "./MoviePoster";
import MovieDetails from "./MovieDetails";
import BookmarkButton from "./BookmarkButton";

function Movie({ type = "regular", movie }) {
  return (
    <li className={`${styles.movie} ${type === "compact" ? styles["movie--compact"] : ""}`}>
      <article>
        <MoviePoster type={type} movie={movie} />
        <MovieDetails type={type} movie={movie} />
      </article>
      <BookmarkButton />
    </li>
  );
}

export default Movie;
