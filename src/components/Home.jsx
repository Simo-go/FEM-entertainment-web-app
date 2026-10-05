import TrendingBox from "./TrendingBox";
import TrendingMovies from "./TrendingMovies";

import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <TrendingBox>
        <h2 className={`text-preset-1 ${styles.trendingTitle}`}>Trending</h2>
        <TrendingMovies />
      </TrendingBox>
    </>
  );
}

export default Home;
