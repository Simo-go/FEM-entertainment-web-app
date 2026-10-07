import styles from "./MediaList.module.css";
import MediaCard from "../mediacard/MediaCard";
import { useMedia } from "../../contexts/MediaProvider";
import Loader from "../loader/loader";

function MediaList({ media, className = "", cardType = "regular" }) {
  const {
    state: { isLoading },
  } = useMedia();

  return (
    <ul className={`list ${styles.mediaList} ${className ?? ""} ${isLoading ? styles.isLoading : ""}`}>
      {isLoading ? <Loader /> : media.map(media => <MediaCard key={media.id} media={media} type={cardType} />)}
    </ul>
  );
}

export default MediaList;
