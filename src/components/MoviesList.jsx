import styles from "./MoviesList.module.css";
import Movie from "./Movie";

function MoviesList() {
  return (
    <ul className={`list ${styles.moviesList}`}>
      {Array.from({ length: 15 }, (_, i) => (
        <Movie key={i} />
      ))}
    </ul>
  );
}

export default MoviesList;
