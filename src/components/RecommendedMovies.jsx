import styles from "./RecommendedMovies.module.css";
import Movie from "./Movie";

function RecommendedMovies() {
  return (
    <ul className={`list ${styles.recommendedList}`}>
      {Array.from({ length: 15 }, (_, i) => (
        <Movie key={i} />
      ))}
    </ul>
  );
}

export default RecommendedMovies;
