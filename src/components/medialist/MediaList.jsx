import styles from "./MediaList.module.css";
import Movie from "../movie/MediaCard";
import { useMedia } from "../../contexts/MediaProvider";
import Loader from "../loader/loader";

function MediaList({ media }) {
  const {
    state: { isLoading },
  } = useMedia();

  return (
    <ul className={`list ${styles.moviesList}`}>{isLoading ? <Loader /> : media.map(media => <Movie key={media.id} media={media} />)}</ul>
  );
}

export default MediaList;
