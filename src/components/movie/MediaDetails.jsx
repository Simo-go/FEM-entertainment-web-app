import styles from "./MediaCard.module.css";
import MovieIcon from "../../assets/icon-category-movie.svg?react";
import SeriesIcon from "../../assets/icon-category-tv.svg?react";

function getIcon(category) {
  category = category.toLowerCase();

  if (category === "movie") return <MovieIcon />;
  if (category === "tv series") return <SeriesIcon />;
}

function MediaDetails({ type, media }) {
  const CategoryIcon = getIcon(media.category);

  return (
    <div className={styles.detailsContainer}>
      <ul className={`list ${type === "compact" ? "text-preset-5" : "text-preset-6"} ${styles.mediaDetails || ""}`}>
        <li className={styles.mediaDetailsItem}>{media.year}</li>
        <span className={styles.detailsSeparator}></span>
        <li className={styles.mediaDetailsItem}>
          {CategoryIcon}
          {media.category}
        </li>
        <span className={styles.detailsSeparator}></span>
        <li className={styles.mediaDetailsItem}>{media.rating}</li>
      </ul>
      <h3 className={`${type === "compact" ? "text-preset-3" : "text-preset-4"} ${styles.mediaTitle || ""}`}>{media.title}</h3>
    </div>
  );
}

export default MediaDetails;
