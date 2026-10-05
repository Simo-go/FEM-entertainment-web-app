import styles from "./TrendingMovies.module.css";
import Movie from "../movie/Movie";
import { useMovies } from "../../contexts/MoviesProvider";
import Loader from "../loader/loader";

function TrendingMovies() {
  const {
    state: { movies },
  } = useMovies();
  console.log(movies);

  if (movies.length === 0) return <Loader />;

  const trendingMovies = movies.filter(movie => movie.isTrending);

  return (
    <ul className={`list ${styles.trendingList}`}>
      {trendingMovies.map(movie => (
        <Movie type="compact" movie={movie} key={movie.id} />
      ))}
    </ul>
  );
}

export default TrendingMovies;
