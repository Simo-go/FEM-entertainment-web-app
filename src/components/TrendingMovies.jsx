import styles from "./TrendingMovies.module.css";
import Movie from "./Movie";

function TrendingMovies() {
  return (
    <ul className={`list ${styles.trendingList}`}>
      <Movie type="compact" />
      <Movie type="compact" />
      <Movie type="compact" />
    </ul>
  );
}

export default TrendingMovies;
