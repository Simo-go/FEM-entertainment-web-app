import styles from "./TrendingMovies.module.css";
import Movie from "../movie/Movie";
import { useMovies } from "../../contexts/MoviesProvider";

function TrendingMovies() {
  const { {movies} } = useMovies()


  return (
    <ul className={`list ${styles.trendingList}`}>
      <Movie type="compact" />
      <Movie type="compact" />
      <Movie type="compact" />
      <Movie type="compact" />
      <Movie type="compact" />
      <Movie type="compact" />
    </ul>
  );
}

export default TrendingMovies;
