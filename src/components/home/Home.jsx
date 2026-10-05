import styles from "./Home.module.css";
import TrendingMoviesBox from "../trendingmovies/TrendingMoviesBox";
import RecommendedMediaBox from "../recommendedMediaBox/RecommendedMediaBox";

function Home() {
  return (
    <>
      <TrendingMoviesBox />
      <RecommendedMediaBox />
    </>
  );
}

export default Home;
