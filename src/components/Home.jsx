import TrendingBox from "./TrendingBox";
import TrendingMovies from "./TrendingMovies";

import styles from "./Home.module.css";
import RecommendedBox from "./RecommendedBox";
import RecommendedMovies from "./RecommendedMovies";

function Home() {
  return (
    <>
      <TrendingBox>
        <h2 className={`text-preset-1 ${styles.trendingTitle} ${styles.title}`}>Trending</h2>
        <TrendingMovies />
      </TrendingBox>
      <RecommendedBox>
        <h2 className={`text-preset-1 ${styles.recommendedTitle} ${styles.title}`}>Recommended for you</h2>
        <RecommendedMovies />
      </RecommendedBox>
    </>
  );
}

export default Home;
