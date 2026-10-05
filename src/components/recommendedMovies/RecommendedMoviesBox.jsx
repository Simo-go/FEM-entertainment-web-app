import { useMemo } from "react";
import { useMovies } from "../../contexts/MoviesProvider";
import MediaBox from "../mediabox/MediaBox";
import MoviesList from "../movieslist/MoviesList";
import styles from "./RecommendedMoviesBox.module.css";

function RecommendedMoviesBox() {
  const {
    state: { movies },
  } = useMovies();
  const recommendedMovies = useMemo(() => movies.toSorted((a, b) => b.year - a.year), [movies]);
  // Note: this is just performed based on the year because the fake API doesn't provide any ratings.

  return (
    <MediaBox>
      <h2 className={`title text-preset-1 ${styles.recommendedTitle} ${styles.title}`}>Recommended for you</h2>
      <MoviesList movies={recommendedMovies} />
    </MediaBox>
  );
}

export default RecommendedMoviesBox;
