import styles from "./Movie.module.css";
import PlayIcon from "../../assets/icon-play.svg?react";

const movie = {
  title: "Beyond Earth",
  thumbnail: {
    trending: {
      small: "/assets/thumbnails/beyond-earth/trending/small.jpg",
      large: "/assets/thumbnails/beyond-earth/trending/large.jpg",
    },
    regular: {
      small: "/assets/thumbnails/beyond-earth/regular/small.jpg",
      medium: "/assets/thumbnails/beyond-earth/regular/medium.jpg",
      large: "/assets/thumbnails/beyond-earth/regular/large.jpg",
    },
  },
  year: 2019,
  category: "Movie",
  rating: "PG",
  isBookmarked: false,
  isTrending: true,
};

function MoviePoster({ type }) {
  return (
    <div className={`${type === "compact" ? styles.compact : ""} ${styles.posterWrapper}`}>
      <picture>
        <source media="(min-width: 48em)" srcset={type === "compact" ? movie.thumbnail.trending.large : movie.thumbnail.regular.large} />
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
