import styles from "./MediaCard.module.css";
import PlayIcon from "../../assets/icon-play.svg?react";

function MediaPoster({ type, media }) {
  return (
    <div className={`${type === "compact" ? styles.compact : ""} ${styles.posterWrapper}`}>
      <picture>
        <source media="(min-width: 48em)" srcSet={type === "compact" ? media.thumbnail.trending.large : media.thumbnail.regular.large} />
        <img src={type === "compact" ? media.thumbnail.trending.small : media.thumbnail.regular.small} alt="" className={styles.poster} />
      </picture>
      <button className={`btn ${styles.playBtn}`}>
        <PlayIcon />
        <span className="text-preset-4">Play</span>
      </button>
    </div>
  );
}

export default MediaPoster;
