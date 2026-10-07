import styles from "./MediaCard.module.css";
import MediaPoster from "./MediaPoster";
import MediaDetails from "./MediaDetails";
import BookmarkButton from "./BookmarkButton";
import { memo } from "react";

function MediaCard({ type = "regular", media }) {
  return (
    <li className={`${styles.media} ${type === "compact" ? styles["media--compact"] : ""}`}>
      <article>
        <MediaPoster type={type} media={media} />
        <MediaDetails type={type} media={media} />
      </article>
      <BookmarkButton medium={media} />
    </li>
  );
}

export default memo(MediaCard);
