import TrendingMovies from "./TrendingMovies";
import styles from "./Home.module.css";
import MoviesList from "./MoviesList";
import MediaBox from "./MediaBox";

function Home() {
  return (
    <>
      <MediaBox className={styles.trendingBox}>
        <h2 className={`title text-preset-1 ${styles.trendingTitle}`}>Trending</h2>
        <TrendingMovies />
      </MediaBox>
      <MediaBox>
        <h2 className={`title text-preset-1 ${styles.recommendedTitle} ${styles.title}`}>Recommended for you</h2>
        <MoviesList />
      </MediaBox>
    </>
  );
}

export default Home;
