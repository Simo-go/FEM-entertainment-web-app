import MediaBox from "../mediabox/MediaBox";
import styles from "./Movies.module.css";
import MoviesList from "../movieslist/MoviesList";

function Movies() {
  return (
    <MediaBox>
      <h2 className="title text-preset-1">Movies</h2>
      <MoviesList />
    </MediaBox>
  );
}

export default Movies;
