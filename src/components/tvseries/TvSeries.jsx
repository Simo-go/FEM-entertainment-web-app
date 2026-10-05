import MediaBox from "../mediabox/MediaBox";
import MoviesList from "../movieslist/MoviesList";

function TvSeries() {
  return (
    <MediaBox>
      <h2 className="title text-preset-1">TV Series</h2>
      <MoviesList />
    </MediaBox>
  );
}

export default TvSeries;
