import MediaBox from "./MediaBox";
import styles from "./Movies.module.css";
import MoviesList from "./MoviesList";

function Movies() {
  return (
    <MediaBox>
      <h2 className="title text-preset-1">Movies</h2>
      <MoviesList />
    </MediaBox>
  );
}

export default Movies;
