import styles from "./Movie.module.css";
import PlayIcon from "../../assets/icon-play.svg?react";

function MoviePoster({ type, movie }) {
  return (
    <div className={`${type === "compact" ? styles.compact : ""} ${styles.posterWrapper}`}>
      <picture>
        <source media="(min-width: 48em)" srcSet={type === "compact" ? movie.thumbnail.trending.large : movie.thumbnail.regular.large} />
        <img src={type === "compact" ? movie.thumbnail.trending.small : movie.thumbnail.regular.small} alt="" className={styles.poster} />
      </picture>
      <button className={`btn ${styles.playBtn}`}>
        <PlayIcon />
        <span className="text-preset-4">Play</span>
      </button>
    </div>
  );
}

export default MoviePoster;
