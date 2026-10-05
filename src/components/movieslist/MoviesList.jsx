import styles from "./MoviesList.module.css";
import Movie from "../movie/Movie";
import { useMovies } from "../../contexts/MoviesProvider";
import Loader from "../loader/loader";

function MoviesList({ movies }) {
  const {
    state: { isLoading },
  } = useMovies();

  return (
    <ul className={`list ${styles.moviesList}`}>{isLoading ? <Loader /> : movies.map(movie => <Movie key={movie.id} movie={movie} />)}</ul>
  );
}

export default MoviesList;
