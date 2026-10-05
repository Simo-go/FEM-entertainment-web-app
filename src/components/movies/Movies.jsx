import MediaBox from "../mediabox/MediaBox";
import styles from "./Movies.module.css";
import MoviesList from "../movieslist/MoviesList";
import { useMovies } from "../../contexts/MoviesProvider";

function Movies() {
  const {
    state: { movies: media },
  } = useMovies();
  const movies = media.filter(media => media.category === "Movie").toSorted((a, b) => b.year - a.year);

  return (
    <MediaBox>
      <h2 className="title text-preset-1">Movies</h2>
      <MoviesList movies={movies} />
    </MediaBox>
  );
}

export default Movies;
