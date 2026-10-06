import styles from "./MediaList.module.css";
import Movie from "../movie/MediaCard";
import { useMedia } from "../../contexts/MediaProvider";
import Loader from "../loader/loader";

function MediaList({ media, className = "", cardType = "regular" }) {
  const {
    state: { isLoading },
  } = useMedia();

  return (
    <ul className={`list ${styles.mediaList} ${className ?? ""} ${isLoading ? styles.isLoading : ""}`}>
      {isLoading ? <Loader /> : media.map(media => <Movie key={media.id} media={media} type={cardType} />)}
    </ul>
  );
}

export default MediaList;
