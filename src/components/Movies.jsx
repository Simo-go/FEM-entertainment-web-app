import styles from "./Movies.module.css";
import MoviesList from "./MoviesList";

function Movies() {
  return (
    <section>
      <h2 className="title text-preset-1">Movies</h2>
      <MoviesList />
    </section>
  );
}

export default Movies;
