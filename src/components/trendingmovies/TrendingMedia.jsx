import { useMedia } from "../../contexts/MediaProvider";

import styles from "./TrendingMedia.module.css";
import Loader from "../loader/loader";
import MediaCard from "../movie/MediaCard";

function TrendingMedia() {
  const {
    state: { media },
  } = useMedia();

  if (media.length === 0) return <Loader />;

  const trendingMedia = media.filter(media => media.isTrending);

  return (
    <ul className={`list ${styles.trendingList}`}>
      {trendingMedia.map(media => (
        <MediaCard type="compact" media={media} key={media.id} />
      ))}
    </ul>
  );
}

export default TrendingMedia;
