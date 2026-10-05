import MediaBox from "../mediabox/MediaBox";
import MoviesList from "../movieslist/MoviesList";
import styles from "./RecommendedMoviesBox.module.css";

function RecommendedMoviesBox() {
  return (
    <MediaBox>
      <h2 className={`title text-preset-1 ${styles.recommendedTitle} ${styles.title}`}>Recommended for you</h2>
      <MoviesList />
    </MediaBox>
  );
}

export default RecommendedMoviesBox;
