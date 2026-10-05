import MediaBox from "../mediabox/MediaBox";
import styles from "./Movies.module.css";
import MediaList from "../medialist/MediaList";
import { useMedia } from "../../contexts/MediaProvider";

function Movies() {
  const {
    state: { media },
  } = useMedia();
  const movies = media.filter(media => media.category === "Movie").toSorted((a, b) => b.year - a.year);

  return (
    <MediaBox>
      <h2 className="title text-preset-1">Movies</h2>
      <MediaList media={movies} />
    </MediaBox>
  );
}

export default Movies;
