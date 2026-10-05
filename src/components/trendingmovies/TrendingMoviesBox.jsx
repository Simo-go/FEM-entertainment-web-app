import MediaBox from "../mediabox/MediaBox";
import TrendingMovies from "./TrendingMovies";
import styles from "./TrendingMoviesBox.module.css";

function TrendingMoviesBox() {
  return (
    <MediaBox className={styles.trendingBox}>
      <div className={styles.scrollbarWrapper}>
        <h2 className={`title text-preset-1 ${styles.trendingTitle}`}>Trending</h2>
        <TrendingMovies />
      </div>
    </MediaBox>
  );
}

export default TrendingMoviesBox;
