import { useMemo } from "react";
import { useMedia } from "../../contexts/MediaProvider";
import MediaBox from "../mediabox/MediaBox";
import MediaList from "../medialist/MediaList";
import styles from "./RecommendedMediaBox.module.css";

function RecommendedMediaBox() {
  const {
    state: { media },
  } = useMedia();
  const recommendedMedia = useMemo(() => media.toSorted((a, b) => b.year - a.year), [media]);
  // Note: this is just performed based on the year because the fake API doesn't provide any ratings.

  return (
    <MediaBox>
      <h2 className={`title text-preset-1 ${styles.recommendedTitle} ${styles.title}`}>Recommended for you</h2>
      <MediaList media={recommendedMedia} />
    </MediaBox>
  );
}

export default RecommendedMediaBox;
