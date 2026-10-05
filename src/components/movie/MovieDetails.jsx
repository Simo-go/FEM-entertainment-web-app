import styles from "./Movie.module.css";
import MovieIcon from "../../assets/icon-category-movie.svg?react";
import SeriesIcon from "../../assets/icon-category-tv.svg?react";

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

function getIcon(category) {
  category = category.toLowerCase();

  if (category === "movie") return <MovieIcon />;
  if (category === "tv series") return <SeriesIcon />;
}

function MovieDetails({ type }) {
  const CategoryIcon = getIcon(movie.category);

  return (
    <div className={styles.detailsContainer}>
      <ul className={`list ${type === "compact" ? "text-preset-5" : "text-preset-6"} ${styles.movieDetails || ""}`}>
        <li className={styles.movieDetailsItem}>{movie.year}</li>
        <span className={styles.detailsSeparator}></span>
        <li className={styles.movieDetailsItem}>
          {CategoryIcon}
          {movie.category}
        </li>
        <span className={styles.detailsSeparator}></span>
        <li className={styles.movieDetailsItem}>{movie.rating}</li>
      </ul>
      <h3 className={`${type === "compact" ? "text-preset-3" : "text-preset-4"} ${styles.movieTitle || ""}`}>{movie.title}</h3>
    </div>
  );
}

export default MovieDetails;
