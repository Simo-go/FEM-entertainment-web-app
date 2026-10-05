import Button from "../button/Button";
import BookmarkIcon from "../../assets/icon-bookmark-empty.svg?react";
import styles from "./MediaCard.module.css";
import { useMedia } from "../../contexts/MediaProvider";

function BookmarkButton({ medium }) {
  const {
    state: { isLoading },
    updateMedium,
  } = useMedia();

  function handleClick() {
    console.log("test");

    updateMedium(medium.id, !medium.isBookmarked);
  }

  return (
    <Button onClick={handleClick} className={`btn ${styles.bookmarkWrapper}`}>
      <BookmarkIcon className={`${styles.bookmarkIcon} ${medium.isBookmarked ? styles.isBookmarked : ""}`} />
    </Button>
  );
}

export default BookmarkButton;
