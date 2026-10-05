import styles from "./Movie.module.css";

const movie = {
  title: "Beyond Earth",
  thumbnail: {
    trending: {
      small: "./assets/thumbnails/beyond-earth/trending/small.jpg",
      large: "./assets/thumbnails/beyond-earth/trending/large.jpg",
    },
    regular: {
      small: "./assets/thumbnails/beyond-earth/regular/small.jpg",
      medium: "./assets/thumbnails/beyond-earth/regular/medium.jpg",
      large: "./assets/thumbnails/beyond-earth/regular/large.jpg",
    },
  },
  year: 2019,
  category: "Movie",
  rating: "PG",
  isBookmarked: false,
  isTrending: true,
};

function Movie({ type = "regular" }) {
  return (
    <li className={`${styles.movie} ${type === "compact" ? styles["movie--compact"] : ""}`}>
      <article>
        <img src={movie.thumbnail.trending.small} alt="" className={styles.poster} />
        <div className={styles.detailsContainer}>
          <ul className={`list text-preset-5 ${styles.movieDetails}`}>
            <li className={styles.movieDetailsItem}>{movie.year}</li>
            <span className={styles.detailsSeparator}></span>
            <li className={styles.movieDetailsItem}>{movie.category}</li>
            <span className={styles.detailsSeparator}></span>
            <li className={styles.movieDetailsItem}>{movie.rating}</li>
          </ul>
          <h3 className={`text-preset-3 ${styles.movieTitle}`}>{movie.title}</h3>
        </div>
      </article>
    </li>
  );
}

export default Movie;
