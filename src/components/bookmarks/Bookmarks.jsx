import MediaBox from "../mediabox/MediaBox";
import styles from "./Bookmarks.module.css";
import MovieList from "../medialist/MediaList";
import { useMedia } from "../../contexts/MediaProvider";

function Bookmarks() {
  const {
    state: { media },
  } = useMedia();
  const bookmarkedMovies = media.filter(medium => medium.category.toLowerCase() === "movie" && medium.isBookmarked);
  const bookmarkedSeries = media.filter(medium => medium.category.toLowerCase() === "tv series" && medium.isBookmarked);

  return (
    <>
      <MediaBox className={styles.bookmarkedMoviesBox}>
        <h2 className="title text-preset-1">Bookmarked Movies</h2>
        <MovieList media={bookmarkedMovies} />
      </MediaBox>
      <MediaBox>
        <h2 className="title text-preset-1">Bookmarked TV Series</h2>
        <MovieList media={bookmarkedSeries} />
      </MediaBox>
    </>
  );
}

export default Bookmarks;
