import TrendingBox from "./TrendingBox";
import TrendingMovies from "./TrendingMovies";

import styles from "./Home.module.css";
import RecommendedBox from "./RecommendedBox";
import MoviesList from "./MoviesList";

function Home() {
  return (
    <>
      <TrendingBox>
        <h2 className={`text-preset-1 ${styles.trendingTitle} ${styles.title}`}>Trending</h2>
        <TrendingMovies />
      </TrendingBox>
      <RecommendedBox>
        <h2 className={`text-preset-1 ${styles.recommendedTitle} ${styles.title}`}>Recommended for you</h2>
        <MoviesList />
      </RecommendedBox>
    </>
  );
}

export default Home;
