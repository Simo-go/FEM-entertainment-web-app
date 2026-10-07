import styles from "./Home.module.css";
import TrendingMoviesBox from "../trendingmovies/TrendingMoviesBox";
import RecommendedMediaBox from "../recommendedMediaBox/RecommendedMediaBox";
import { memo } from "react";

function Home() {
  return (
    <>
      <TrendingMoviesBox />
      <RecommendedMediaBox />
    </>
  );
}

export default memo(Home);
