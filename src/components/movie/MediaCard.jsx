import styles from "./MediaCard.module.css";
import MediaPoster from "./MediaPoster";
import MediaDetails from "./MediaDetails";
import BookmarkButton from "./BookmarkButton";

function MediaCard({ type = "regular", media }) {
  return (
    <li className={`${styles.media} ${type === "compact" ? styles["media--compact"] : ""}`}>
      <article>
        <MediaPoster type={type} media={media} />
        <MediaDetails type={type} media={media} />
      </article>
      <BookmarkButton isBookmarked={media.isBookmarked} />
    </li>
  );
}

export default MediaCard;
