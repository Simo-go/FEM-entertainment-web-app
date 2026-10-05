import TrendingMovies from "../trendingmovies/TrendingMovies";
import styles from "./Home.module.css";
import MoviesList from "../movieslist/MoviesList";
import MediaBox from "../mediabox/MediaBox";

function Home() {
  return (
    <>
      <MediaBox className={styles.trendingBox}>
        <div className={styles.scrollbarWrapper}>
          <h2 className={`title text-preset-1 ${styles.trendingTitle}`}>Trending</h2>
          <TrendingMovies />
        </div>
      </MediaBox>
      <MediaBox>
        <h2 className={`title text-preset-1 ${styles.recommendedTitle} ${styles.title}`}>Recommended for you</h2>
        <MoviesList />
      </MediaBox>
    </>
  );
}

export default Home;
