import Button from "../button/Button";
import BookmarkIcon from "../../assets/icon-bookmark-empty.svg?react";
import styles from "./MediaCard.module.css";

function BookmarkButton({ isBookmarked = false }) {
  return (
    <Button className={`btn ${styles.bookmarkWrapper}`}>
      <BookmarkIcon className={`${styles.bookmarkIcon} ${isBookmarked ? styles.isBookmarked : ""}`} />
    </Button>
  );
}

export default BookmarkButton;
