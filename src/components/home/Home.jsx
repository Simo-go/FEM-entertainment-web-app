import styles from "./Home.module.css";
import MoviesList from "../movieslist/MoviesList";
import MediaBox from "../mediabox/MediaBox";
import TrendingMoviesBox from "./TrendingMoviesBox";

function Home() {
  return (
    <>
      <TrendingMoviesBox />

      <MediaBox>
        <h2 className={`title text-preset-1 ${styles.recommendedTitle} ${styles.title}`}>Recommended for you</h2>
        <MoviesList />
      </MediaBox>
    </>
  );
}

export default Home;
