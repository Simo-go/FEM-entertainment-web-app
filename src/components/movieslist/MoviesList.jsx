import styles from "./MoviesList.module.css";
import Movie from "../movie/Movie";
import { useMovies } from "../../contexts/MoviesProvider";
import Loader from "../loader/loader";
import { useMemo } from "react";

function MoviesList() {
  const {
    state: { movies, isLoading },
  } = useMovies();
  const recommendedMovies = useMemo(() => movies.toSorted((a, b) => b.year - a.year), [movies]);
  // Note: this is just performed based on the year because the fake API doesn't provide any ratings.

  return (
    <ul className={`list ${styles.moviesList}`}>
      {isLoading ? <Loader /> : recommendedMovies.map(movie => <Movie key={movie.id} movie={movie} />)}
    </ul>
  );
}

export default MoviesList;
