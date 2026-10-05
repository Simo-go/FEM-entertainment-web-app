import styles from "./Home.module.css";
import TrendingMoviesBox from "../trendingmovies/TrendingMoviesBox";
import RecommendedMoviesBox from "../recommendedMovies/RecommendedMoviesBox";

function Home() {
  return (
    <>
      <TrendingMoviesBox />
      <RecommendedMoviesBox />
    </>
  );
}

export default Home;
