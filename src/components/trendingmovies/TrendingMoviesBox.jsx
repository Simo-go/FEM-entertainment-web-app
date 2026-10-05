import MediaBox from "../mediabox/MediaBox";
import styles from "./TrendingMoviesBox.module.css";
import MediaList from "../medialist/MediaList";
import { useMedia } from "../../contexts/MediaProvider";

function TrendingMoviesBox() {
  const {
    state: { media },
  } = useMedia();

  const trendingMedia = media.filter(media => media.isTrending);

  return (
    <MediaBox className={styles.trendingBox}>
      <div className={styles.scrollbarWrapper}>
        <h2 className={`title text-preset-1 ${styles.trendingTitle}`}>Trending</h2>
        <MediaList media={trendingMedia} className={styles.trendingList} cardType="compact" />
      </div>
    </MediaBox>
  );
}

export default TrendingMoviesBox;
